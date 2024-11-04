import { useState } from "react";
import { useTranslation } from "react-i18next";
import EmojiPicker from "emoji-picker-react";
import { FaFileImage, FaSmile } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewPost = () => {
  const { t } = useTranslation();
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isCommentsAllowed, setIsCommentsAllowed] = useState(true);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const addEmoji = (emojiObject) => {
    setCaption((prev) => prev + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  const handlePostSubmit = async () => {
    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("isCommentsAllowed", isCommentsAllowed);
    if (image) {
      formData.append("media", image);
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/post/create`,
        formData,
        { withCredentials: true }
      );
      console.log(response)
      if (response.data) {
        toast.success(t("postCreatedSuccessfully"));
        setCaption("");
        setImage(null);
      } else {
        toast.error(t("postCreationFailed"));
      }
    } catch (error) {
      console.error(error.response.data.message);
      if (error.response && !Array.isArray(error.response.data.message)) {
        toast.error(t("serverError"));
      } else if (error.response && Array.isArray(error.response.data.message)) {
        error.response.data.message.forEach((err) => toast.error(err));
      } else {
        toast.error(t("serverError"));
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        {t("createPost")}
      </h2>
      <div className="flex flex-col items-center">
        <label
          htmlFor="fileInput"
          className="cursor-pointer flex flex-col items-center justify-center w-full h-48 border-2 border-dotted border-gray-300 rounded-lg mb-4"
        >
          <FaFileImage className="text-4xl text-gray-500 mb-2" />
          <span className="text-gray-500">{t("uploadImage")}</span>
          <input
            type="file"
            accept="image/*,video/*"
            onChange={handleImageUpload}
            className="hidden"
            id="fileInput"
          />
        </label>

        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            className="w-full h-auto rounded-lg mb-4"
          />
        )}

        <div className="flex justify-between w-full mb-2">
          <label className="block text-sm font-medium text-gray-600">
            {t("caption")}
          </label>
          <button
            type="button"
            onClick={() => setShowEmojiPicker((prev) => !prev)}
            className="text-blue-500 text-lg"
          >
            <FaSmile />
          </button>
        </div>

        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          rows="3"
          placeholder={t("writeCaption")}
          className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 mb-4"
        />

        {showEmojiPicker && (
          <EmojiPicker onEmojiClick={(emojiObject) => addEmoji(emojiObject)} />
        )}

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={!isCommentsAllowed}
            onChange={() => setIsCommentsAllowed(!isCommentsAllowed)}
            className="mr-2"
          />
          <label className="flex-1 text-sm font-medium text-gray-600">
            {t("hideComments")}
          </label>
          <small className="text-gray-500">
            {t("hideCommentsDescription")}
          </small>
        </div>

        <button
          type="button"
          onClick={handlePostSubmit}
          className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
        >
          {t("post")}
        </button>
      </div>
    </div>
  );
};

export default NewPost;