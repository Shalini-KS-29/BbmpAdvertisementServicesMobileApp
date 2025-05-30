export const uploadInspectionData = async (data) => {

    const formData = new FormData();

    // 1. Attach the image file
    formData.append('file', {
        uri: data?.file?.uri, // local file URI
        name: data?.file?.fileName,
        type: data?.file?.type,
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
            approvedSpecification: data.approvedSpecification,
            structuralCondition: data.structuralCondition,
            regulation: data.regulation,
            comments: data.comments,
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
