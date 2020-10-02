import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import FeaturePagePreview from './preview-templates/FeaturePagePreview'
import CategoryPagePreview from './preview-templates/CategoryPagePreview'
import TopicsPagePreview from './preview-templates/TopicsPagePreview'
import VideoPlayer from './custom-component/VideoPlayer'
import Note from './custom-component/Note'
import TipNote from './custom-component/TipNote'
import QuickTip from './custom-component/QuickTip'


CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);
CMS.registerEditorComponent(VideoPlayer);
CMS.registerEditorComponent(Note);
CMS.registerEditorComponent(TipNote);
CMS.registerEditorComponent(QuickTip);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('features', FeaturePagePreview);
CMS.registerPreviewTemplate('categories', CategoryPagePreview);
CMS.registerPreviewTemplate('topics', TopicsPagePreview);
CMS.registerPreviewTemplate('features-coach', FeaturePagePreview);
CMS.registerPreviewTemplate('categories-coach', CategoryPagePreview);
CMS.registerPreviewTemplate('topics-coach', TopicsPagePreview);
