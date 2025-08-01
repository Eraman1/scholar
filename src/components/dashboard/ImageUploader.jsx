import { useState } from 'react'

export default function ImageUploader() {
    const [selectedImage, setSelectedImage] = useState(null)
    const [previewUrl, setPreviewUrl] = useState(null)

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setSelectedImage(file)
            setPreviewUrl(URL.createObjectURL(file))
        }
    }

    return (
        <div className="w-full max-w-md mx-auto p-4 mt-8 border rounded-md shadow-sm bg-white">
            <h2 className="text-xl font-semibold mb-4 text-center">Upload Image</h2>

            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
                   file:rounded-md file:border-0
                   file:text-sm file:font-semibold
                   file:bg-[#FF6B00] file:text-white
                   hover:file:bg-[#e55c00]"
            />

            {previewUrl && (
                <div className="mt-4">
                    <p className="text-sm text-gray-500 mb-2">Preview:</p>
                    <img
                        src={previewUrl}
                        alt="Selected"
                        className="w-full h-auto max-h-96 object-contain border rounded"
                    />
                </div>
            )}
        </div>
    )
}
