import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ImageViewing from 'react-native-image-viewing';
import { launchImageLibrary } from 'react-native-image-picker';
import colors from '../../constant/colors';
import { FontSize } from '../../constant/fontSize';

const CaptureOrUploadImage = (props) => {
    const { handleImage } = props;
    const [photos, setPhotos] = useState([]); // array of images
    const [visible, setVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    handleImage(photos)




    const handleImageOption = () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                selectionLimit: 0, // for multiple images
            },
            (response) => {
                if (!response.didCancel && !response.errorCode) {
                    setPhotos(response.assets || []);
                }
            }
        );
    };

    const openFullScreen = (index) => {
        setCurrentIndex(index);
        setVisible(true);
    };
    console.log("photosss", photos)
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
                            <TouchableOpacity onPress={() => openFullScreen(index)}>
                                <Image source={{ uri: item.uri }} style={styles.imageStyle} />
                            </TouchableOpacity>
                        )}
                    />

                    <TouchableOpacity onPress={handleImageOption} activeOpacity={0.8}>
                        <View style={styles.addMore}>
                            <Icon name="camera" size={35} color={colors.primary} />
                            {/* color="#007bff" */}
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

const styles = StyleSheet.create({
    container: {
        height: 150,
        // padding: 20,
        width: '100%',
        // margin: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',

    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 3,
        padding: 5,
        // borderTopWidth: 5,
        // borderBottomWidth: 5,
        backgroundColor: colors.white,
        borderColor: colors.primary,
        maxWidth: '100%',
        borderRadius: 10
    },
    overlay: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.primary,
        padding: 20,
        width: '100%',
        borderRadius: 10,
    },
    addMore: {
        alignItems: 'center',
        // justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: '#ccc',
        // padding: 20,
        // borderRadius: 10,
    },
    text: { marginTop: 10, fontSize: 16 },
    addMoreText: {
        marginTop: 10,
        fontSize: FontSize.H5,
        color: colors.primary,
        fontWeight: 'bold'
    },
    imageStyle: {
        width: 80,
        height: 80,
        marginRight: 10,
        position: 'static',
        borderRadius: 4,
        borderColor: colors.primary,
        borderWidth: 2
    },
});

export default CaptureOrUploadImage;
