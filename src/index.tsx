import React from 'react';
import { UIManager, Platform, TouchableOpacity, Text } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

const LINKING_ERROR =
  `The package 'react-native-clipboard-module' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const ComponentName = 'ClipboardModuleView';

export const ClipboardTestingModuleView = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        Clipboard.setString('Sample Test Id');
      }}
    >
      <Text>Sample Test Id</Text>
    </TouchableOpacity>
  );
};

export const ClipboardModuleView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? ClipboardTestingModuleView
    : () => {
        throw new Error(LINKING_ERROR);
      };
