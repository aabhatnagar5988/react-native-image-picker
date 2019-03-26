import { NativeModules, Platform } from 'react-native';

const { ImagePickerManager } = NativeModules;

const DEFAULT_OPTIONS = {
  title: 'Select a Photo',
  cancelButtonTitle: 'Cancel',
  takePhotoButtonTitle: 'Take Photo…',
  chooseFromLibraryButtonTitle: 'Choose from Library…',
  quality: 1.0,
  allowsEditing: false,
  permissionDenied: {
    title: 'Permission denied',
    text:
      'To be able to take pictures with your camera and choose images from your library.',
    reTryTitle: 're-try',
    okTitle: "I'm sure",
  },
};

module.exports = {
  ...ImagePickerManager,
  showMediaPicker: function showMediaPicker(options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (Platform.OS === 'ios') {
      return ImagePickerManager.showFilePicker(
        { ...DEFAULT_OPTIONS, ...options },
        callback,
      );
    }
    return ImagePickerManager.launchImageLibrary(
      { ...DEFAULT_OPTIONS, ...options },
      callback,
    );
  },
  showImagePicker: function showImagePicker(options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    return ImagePickerManager.showImagePicker(
      { ...DEFAULT_OPTIONS, ...options },
      callback,
    );
  },
};
