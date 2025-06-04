import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import ImageViewing from 'react-native-image-viewing';
import { launchImageLibrary } from 'react-native-image-picker';
import colors from '../../constant/colors';
import styles from './captureOrUploadImageStyle';

const CaptureOrUploadImage = (props) => {
    const { handleImage } = props;
    const [photos, setPhotos] = useState([]); // array of images
    const [visible, setVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // notify parent when photos change
    useEffect(() => {
        handleImage(photos);
    }, [photos, handleImage]);

    const handleImageOption = () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                selectionLimit: 0, // for multiple images
            },
            (response) => {
                if (!response.didCancel && !response.errorCode && response.assets?.length) {
                    setPhotos(prev => [...prev, ...response.assets]);   // ⬅️ keep the old ones!
                }
            }
        );
    };

    const openFullScreen = (index) => {
        setCurrentIndex(index);
        setVisible(true);
    };
    return (
        <View style={styles.container}>
            {photos.length > 0 &&
                <View style={styles.imageContainer}>
                    <FlatList
                        data={photos}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                        contentContainerStyle={{ paddingVertical: 3 }}
                        renderItem={({ item, index }) => (
                            <View style={styles.imageWrapper}>
                                {/* Delete Icon inside top-right of image */}
                                <TouchableOpacity
                                    style={styles.deleteIcon}
                                    onPress={() => {
                                        setPhotos((prev) => prev.filter((_, i) => i !== index));
                                    }}>
                                    <Entypo name="cross" size={18} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => openFullScreen(index)}>

                                    <Image source={{ uri: item.uri }} style={styles.imageStyle} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.deleteIcon}
                                    onPress={() => {
                                        setPhotos((prev) => prev.filter((_, i) => i !== index));
                                    }}>
                                </TouchableOpacity>
                            </View>
                        )} />

                    <TouchableOpacity onPress={handleImageOption} activeOpacity={0.8}>
                        <View style={styles.addMore}>
                            <Icon name="camera" size={35} color={colors.primary} />
                            <Text style={styles.addMoreText}>Add More</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            }

            {photos.length == [] && <TouchableOpacity onPress={handleImageOption} activeOpacity={0.8}>
                <View style={styles.overlay}>
                    <Icon name="camera" size={40} color="#007bff" />
                    <Text style={styles.text}>Tap to Upload or Capture Image</Text>
                </View>
            </TouchableOpacity>}

            <ImageViewing
                images={photos.map((p) => ({ uri: p.uri }))}
                imageIndex={currentIndex}
                visible={visible}
                onRequestClose={() => setVisible(false)}
            />
        </View>
    );
};



export default CaptureOrUploadImage;
