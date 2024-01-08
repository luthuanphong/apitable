/**
 * APITable <https://github.com/apitable/apitable>
 * Copyright (C) 2022 APITable Ltd. <https://apitable.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const EmbedFilled: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => <>
    <path d="M3.5 2.5V13.5H5.875C6.28921 13.5 6.625 13.8358 6.625 14.25C6.625 14.6642 6.28921 15 5.875 15H3.25C2.55964 15 2 14.4404 2 13.75V2.25C2 1.55964 2.55964 1 3.25 1H10.0369C10.3773 1 10.7029 1.1388 10.9386 1.38434L13.6517 4.21049C13.8752 4.44327 14 4.75346 14 5.07616V7.5C14 7.91421 13.6642 8.25 13.25 8.25C12.8358 8.25 12.5 7.91421 12.5 7.5V5.17673L9.93034 2.5H3.5Z" fill={ colors[0] }/>
    <path d="M12.3312 10.8816C12.6241 10.5887 13.0989 10.5887 13.3918 10.8816L13.6778 11.1676C14.6472 12.137 14.6473 13.7087 13.6778 14.6781C12.7084 15.6475 11.1367 15.6475 10.1673 14.6781L9.8813 14.3921C9.58841 14.0992 9.58841 13.6243 9.8813 13.3314C10.1742 13.0385 10.6491 13.0385 10.942 13.3314L11.228 13.6174C11.6116 14.0011 12.2336 14.0011 12.6172 13.6174C13.0008 13.2338 13.0008 12.6119 12.6172 12.2283L12.3312 11.9422C12.0383 11.6493 12.0383 11.1745 12.3312 10.8816Z" fill={ colors[0] }/>
    <path d="M8.85307 12.3032C9.14596 12.0103 9.14596 11.5354 8.85307 11.2425L8.5662 10.9557C8.18258 10.572 8.18258 9.95008 8.5662 9.56646C8.94981 9.18285 9.57178 9.18285 9.9554 9.56646L10.2423 9.85333C10.5352 10.1462 11.01 10.1462 11.3029 9.85333C11.5958 9.56043 11.5958 9.08556 11.3029 8.79267L11.0161 8.5058C10.0467 7.5364 8.47494 7.5364 7.50554 8.5058C6.53614 9.4752 6.53614 11.0469 7.50554 12.0163L7.79241 12.3032C8.0853 12.5961 8.56017 12.5961 8.85307 12.3032Z" fill={ colors[0] }/>
    <path d="M9.59467 11.6553C9.30178 11.3624 9.30178 10.8876 9.59467 10.5947C9.88756 10.3018 10.3624 10.3018 10.6553 10.5947L11.7803 11.7197C12.0732 12.0126 12.0732 12.4874 11.7803 12.7803C11.4874 13.0732 11.0126 13.0732 10.7197 12.7803L9.59467 11.6553Z" fill={ colors[0] }/>

  </>,
  name: 'embed_filled',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: ['M3.5 2.5V13.5H5.875C6.28921 13.5 6.625 13.8358 6.625 14.25C6.625 14.6642 6.28921 15 5.875 15H3.25C2.55964 15 2 14.4404 2 13.75V2.25C2 1.55964 2.55964 1 3.25 1H10.0369C10.3773 1 10.7029 1.1388 10.9386 1.38434L13.6517 4.21049C13.8752 4.44327 14 4.75346 14 5.07616V7.5C14 7.91421 13.6642 8.25 13.25 8.25C12.8358 8.25 12.5 7.91421 12.5 7.5V5.17673L9.93034 2.5H3.5Z', 'M12.3312 10.8816C12.6241 10.5887 13.0989 10.5887 13.3918 10.8816L13.6778 11.1676C14.6472 12.137 14.6473 13.7087 13.6778 14.6781C12.7084 15.6475 11.1367 15.6475 10.1673 14.6781L9.8813 14.3921C9.58841 14.0992 9.58841 13.6243 9.8813 13.3314C10.1742 13.0385 10.6491 13.0385 10.942 13.3314L11.228 13.6174C11.6116 14.0011 12.2336 14.0011 12.6172 13.6174C13.0008 13.2338 13.0008 12.6119 12.6172 12.2283L12.3312 11.9422C12.0383 11.6493 12.0383 11.1745 12.3312 10.8816Z', 'M8.85307 12.3032C9.14596 12.0103 9.14596 11.5354 8.85307 11.2425L8.5662 10.9557C8.18258 10.572 8.18258 9.95008 8.5662 9.56646C8.94981 9.18285 9.57178 9.18285 9.9554 9.56646L10.2423 9.85333C10.5352 10.1462 11.01 10.1462 11.3029 9.85333C11.5958 9.56043 11.5958 9.08556 11.3029 8.79267L11.0161 8.5058C10.0467 7.5364 8.47494 7.5364 7.50554 8.5058C6.53614 9.4752 6.53614 11.0469 7.50554 12.0163L7.79241 12.3032C8.0853 12.5961 8.56017 12.5961 8.85307 12.3032Z', 'M9.59467 11.6553C9.30178 11.3624 9.30178 10.8876 9.59467 10.5947C9.88756 10.3018 10.3624 10.3018 10.6553 10.5947L11.7803 11.7197C12.0732 12.0126 12.0732 12.4874 11.7803 12.7803C11.4874 13.0732 11.0126 13.0732 10.7197 12.7803L9.59467 11.6553Z'],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});