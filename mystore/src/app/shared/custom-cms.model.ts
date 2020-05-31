import { CmsBannerComponentMedia, CmsComponent, CmsResponsiveBannerComponentMedia } from '@spartacus/core';

export interface SpartacusHeroBannerComponentData extends CmsComponent {
	headline?: string;
	container?: string;
	media?: CmsBannerComponentMedia | CmsResponsiveBannerComponentMedia;
	urlLink?: string;
	external?: string;
}