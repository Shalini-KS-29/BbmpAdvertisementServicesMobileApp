import AsyncStorage from "@react-native-async-storage/async-storage";

export const uploadInspectionData = async (data) => {
    const latitude = await AsyncStorage.getItem('latitude')
    const longitude = await AsyncStorage.getItem('longitude')

    console.log("latttttlonggg", latitude, longitude)

    const formData = new FormData();

    console.log("imageee sagaggg", data)

    // 1. Attach the image file
    // formData.append('file', {
    //     uri: data?.file?.uri, // local file URI
    //     name: data?.file?.fileName,
    //     type: data?.file?.type,
    // });

    data?.file?.forEach((file, index) => {
        formData.append('files', {
            uri: file?.uri,
            name: file?.fileName || `photo_${index}.jpg`,
            type: file?.type || 'image/jpeg',
        });
    });

    // 2. Attach the JSON data as a string
    const reqBody = {
        approvedSpecification: data.approvedSpecification,
        structuralCondition: data.structuralCondition,
        regulation: data.regulation,
        comments: data.comments,
    };



    // formData.append('req', JSON.stringify(reqBody));
    formData.append('req', {
        string: JSON.stringify({
            advertisementId: data.id,
            approvedSpecification: 'yes',
            structuralCondition: data.structuralCondition,
            regulation: data.regulation,
            comments: data.comments,
            latitude: latitude,
            longitude: longitude,
            completionDate: data.completionDate


            // advertisementId: 1,
            // approvedSpecification: "Yes",
            // structuralCondition: "Fair",
            // regulation: "No",
            // comments: "Routine monitoring",
            // latitude: latitude,
            // longitude: longitude


        }),
        type: 'application/json',
        name: 'req.json',
    });

    console.log("formDataaaaaa", formData)

    // 3. Send via fetch
    try {
        const response = await fetch('http://192.168.0.35:8393/v1/api/bbmp/advertisement/services/inspection', {
            method: 'POST',
            headers: {
                'Accept': '*/*', // allow any content-type in response
            },
            body: formData,
        });
        console.log("Formresponse", response)
        const contentType = response.headers.get('content-type');

        let result;
        if (contentType && contentType.includes('application/json')) {
            result = await response.json();
        } else {
            result = await response.text(); // fallback for non-JSON responses
        }
        console.log('Upload result:', result);
        return result
    } catch (error) {
        console.error('Upload failed:', error);
    }
};
