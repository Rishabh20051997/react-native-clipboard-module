import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-clipboard-module' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type ClipboardModuleProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'ClipboardModuleView';

export const ClipboardModuleView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<ClipboardModuleProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
