import React, { useState, useEffect, useRef } from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import styles from './bannerSliderStyle';
import ImageViewing from 'react-native-image-viewing';

const BannerSlider = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const openFullScreen = (index) => {
        setCurrentIndex(index);
        setVisible(true);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            if (flatListRef?.current && images.length > 0) {
                let nextIndex = (currentIndex + 1) % images.length;
                flatListRef?.current?.scrollToIndex({ index: nextIndex, animated: true });
                setCurrentIndex(nextIndex);
            }
        }, interval);
        return () => clearInterval(timer);
    }, [currentIndex, images, interval]);

    const renderItem = ({ item, index }) => (
        <TouchableOpacity onPress={() => openFullScreen(index)}>
            <Image source={{ uri: item }} style={styles.image} />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={images}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            />
            <ImageViewing
                images={images?.map((p) => ({ uri: p }))}
                imageIndex={currentIndex}
                visible={visible}
                onRequestClose={() => setVisible(false)}
            />
        </View>
    );
};


export default BannerSlider;