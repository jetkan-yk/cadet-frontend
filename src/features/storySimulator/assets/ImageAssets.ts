import { AssetMap, ImageAsset } from 'src/features/game/assets/AssetsTypes';

const SSImageAssets: AssetMap<ImageAsset> = {
  storySimBg: { key: 'student-room', path: '/locations/deathCube_ext/shields-down.png' },
  shortButton: { key: 'short-button', path: '/ui/shortButton.png' },
  invertedButton: { key: 'inverted-button', path: '/ui/invertedColorButton.png' },
  blueUnderlay: { key: 'blue-underlay', path: '/ui/blueUnderlay.png' },
  topButton: { key: 'top-button', path: '/ui/topButton.png' },
  colorIcon: { key: 'color-icon', path: '/ui/colorIcon.png' },
  imageIcon: { key: 'image-icon', path: '/ui/imageIcon.png' },
  bboxIcon: { key: 'bbox-icon', path: '/ui/bboxIcon.png' },
  handIcon: { key: 'hand-icon', path: '/ui/handIcon.png' },
  listIcon: { key: 'list-icon', path: '/ui/listIcon.png' },
  eraseIcon: { key: 'erase-icon', path: '/ui/eraserIcon.png' },
  iconBg: { key: 'icon-bg', path: '/ui/modeIconBg.png' }
};

export default SSImageAssets;
