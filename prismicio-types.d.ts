// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomeDocumentDataSlicesSlice =
  | HomeProductsSliderSlice
  | TestimonialsSlice
  | FeaturedProjectsSlice
  | HomeAboutSectionSlice
  | HomeHeroSlice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;

type ProductsDocumentDataSlicesSlice = ProductCardSlice;

/**
 * Content for Products documents
 */
interface ProductsDocumentData {
  /**
   * Slice Zone field in *Products*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: products.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProductsDocumentDataSlicesSlice> /**
   * Meta Description field in *Products*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: products.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Products*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: products.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Products*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: products.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Products document from Prismic
 *
 * - **API ID**: `products`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProductsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProductsDocumentData>,
    "products",
    Lang
  >;

type ProjectsDocumentDataSlicesSlice = ProjectCardSlice;

/**
 * Content for Projects documents
 */
interface ProjectsDocumentData {
  /**
   * Slice Zone field in *Projects*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectsDocumentDataSlicesSlice> /**
   * Meta Title field in *Projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: projects.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: projects.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Projects*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Projects document from Prismic
 *
 * - **API ID**: `projects`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectsDocumentData>,
    "projects",
    Lang
  >;

export type AllDocumentTypes =
  | HomeDocument
  | ProductsDocument
  | ProjectsDocument;

/**
 * Primary content in *FeaturedProjects → Default → Primary*
 */
export interface FeaturedProjectsSliceDefaultPrimary {
  /**
   * Project One Title field in *FeaturedProjects → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_projects.default.primary.project_one_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  project_one_title: prismic.KeyTextField;

  /**
   * Project One Image field in *FeaturedProjects → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_projects.default.primary.project_one_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  project_one_image: prismic.ImageField<never>;

  /**
   * Project One Content field in *FeaturedProjects → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_projects.default.primary.project_one_content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  project_one_content: prismic.KeyTextField;

  /**
   * Project Two Title field in *FeaturedProjects → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_projects.default.primary.project_two_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  project_two_title: prismic.KeyTextField;

  /**
   * Project Two Image field in *FeaturedProjects → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_projects.default.primary.project_two_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  project_two_image: prismic.ImageField<never>;

  /**
   * Project Two Content field in *FeaturedProjects → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_projects.default.primary.project_two_content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  project_two_content: prismic.KeyTextField;

  /**
   * Project Three Title field in *FeaturedProjects → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_projects.default.primary.project_three_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  project_three_title: prismic.KeyTextField;

  /**
   * Project Three Image field in *FeaturedProjects → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_projects.default.primary.project_three_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  project_three_image: prismic.ImageField<never>;

  /**
   * Project Three Content field in *FeaturedProjects → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_projects.default.primary.project_three_content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  project_three_content: prismic.KeyTextField;

  /**
   * Project Four Title field in *FeaturedProjects → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_projects.default.primary.project_four_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  project_four_title: prismic.KeyTextField;

  /**
   * Project Four Image field in *FeaturedProjects → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_projects.default.primary.project_four_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  project_four_image: prismic.ImageField<never>;

  /**
   * Project Four Content field in *FeaturedProjects → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_projects.default.primary.project_four_content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  project_four_content: prismic.KeyTextField;
}

/**
 * Default variation for FeaturedProjects Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedProjectsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FeaturedProjectsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *FeaturedProjects*
 */
type FeaturedProjectsSliceVariation = FeaturedProjectsSliceDefault;

/**
 * FeaturedProjects Shared Slice
 *
 * - **API ID**: `featured_projects`
 * - **Description**: FeaturedProjects
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedProjectsSlice = prismic.SharedSlice<
  "featured_projects",
  FeaturedProjectsSliceVariation
>;

/**
 * Primary content in *HomeAboutSection → Default → Primary*
 */
export interface HomeAboutSectionSliceDefaultPrimary {
  /**
   * About Company field in *HomeAboutSection → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_about_section.default.primary.about_company
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  about_company: prismic.RichTextField;
}

/**
 * Default variation for HomeAboutSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomeAboutSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HomeAboutSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HomeAboutSection*
 */
type HomeAboutSectionSliceVariation = HomeAboutSectionSliceDefault;

/**
 * HomeAboutSection Shared Slice
 *
 * - **API ID**: `home_about_section`
 * - **Description**: HomeAboutSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomeAboutSectionSlice = prismic.SharedSlice<
  "home_about_section",
  HomeAboutSectionSliceVariation
>;

/**
 * Primary content in *HomeHero → Default → Primary*
 */
export interface HomeHeroSliceDefaultPrimary {
  /**
   * Video field in *HomeHero → Default → Primary*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: home_hero.default.primary.video
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  video: prismic.LinkToMediaField;

  /**
   * Home Image field in *HomeHero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home_hero.default.primary.home_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  home_image: prismic.ImageField<never>;
}

/**
 * Default variation for HomeHero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomeHeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HomeHeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HomeHero*
 */
type HomeHeroSliceVariation = HomeHeroSliceDefault;

/**
 * HomeHero Shared Slice
 *
 * - **API ID**: `home_hero`
 * - **Description**: HomeHero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomeHeroSlice = prismic.SharedSlice<
  "home_hero",
  HomeHeroSliceVariation
>;

/**
 * Primary content in *HomeProductsSlider → Default → Primary*
 */
export interface HomeProductsSliderSliceDefaultPrimary {
  /**
   * Home Products Content field in *HomeProductsSlider → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_products_slider.default.primary.home_products_content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  home_products_content: prismic.KeyTextField;
}

/**
 * Primary content in *HomeProductsSlider → Items*
 */
export interface HomeProductsSliderSliceDefaultItem {
  /**
   * Home Product Title field in *HomeProductsSlider → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_products_slider.items[].home_product_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  home_product_title: prismic.KeyTextField;

  /**
   * Home Product Image field in *HomeProductsSlider → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home_products_slider.items[].home_product_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  home_product_image: prismic.ImageField<never>;
}

/**
 * Default variation for HomeProductsSlider Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomeProductsSliderSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HomeProductsSliderSliceDefaultPrimary>,
  Simplify<HomeProductsSliderSliceDefaultItem>
>;

/**
 * Slice variation for *HomeProductsSlider*
 */
type HomeProductsSliderSliceVariation = HomeProductsSliderSliceDefault;

/**
 * HomeProductsSlider Shared Slice
 *
 * - **API ID**: `home_products_slider`
 * - **Description**: HomeProductsSlider
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomeProductsSliderSlice = prismic.SharedSlice<
  "home_products_slider",
  HomeProductsSliderSliceVariation
>;

/**
 * Primary content in *ProductCard → Items*
 */
export interface ProductCardSliceDefaultItem {
  /**
   * Product Image field in *ProductCard → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: product_card.items[].product_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  product_image: prismic.ImageField<never>;

  /**
   * Product Title field in *ProductCard → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_card.items[].product_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  product_title: prismic.KeyTextField;

  /**
   * Product Category field in *ProductCard → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: product_card.items[].product_category
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  product_category: prismic.SelectField<"Interior Paint" | "Exterior Paint">;
}

/**
 * Default variation for ProductCard Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductCardSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<ProductCardSliceDefaultItem>
>;

/**
 * Slice variation for *ProductCard*
 */
type ProductCardSliceVariation = ProductCardSliceDefault;

/**
 * ProductCard Shared Slice
 *
 * - **API ID**: `product_card`
 * - **Description**: ProductCard
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductCardSlice = prismic.SharedSlice<
  "product_card",
  ProductCardSliceVariation
>;

/**
 * Item in *ProjectCard → Default → Primary → Repeatable Zone*
 */
export interface ProjectCardSliceDefaultPrimaryRepeatableZoneItem {
  /**
   * Project Image field in *ProjectCard → Default → Primary → Repeatable Zone*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project_card.default.primary.repeatable_zone[].project_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  project_image: prismic.ImageField<never>;

  /**
   * Project Title field in *ProjectCard → Default → Primary → Repeatable Zone*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_card.default.primary.repeatable_zone[].project_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  project_title: prismic.KeyTextField;

  /**
   * Project Description field in *ProjectCard → Default → Primary → Repeatable Zone*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_card.default.primary.repeatable_zone[].project_description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  project_description: prismic.KeyTextField;

  /**
   * Project Tags field in *ProjectCard → Default → Primary → Repeatable Zone*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project_card.default.primary.repeatable_zone[].project_tags
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  project_tags: prismic.KeyTextField;
}

/**
 * Primary content in *ProjectCard → Default → Primary*
 */
export interface ProjectCardSliceDefaultPrimary {
  /**
   * Repeatable Zone field in *ProjectCard → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: project_card.default.primary.repeatable_zone[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  repeatable_zone: prismic.GroupField<
    Simplify<ProjectCardSliceDefaultPrimaryRepeatableZoneItem>
  >;
}

/**
 * Default variation for ProjectCard Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectCardSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProjectCardSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ProjectCard*
 */
type ProjectCardSliceVariation = ProjectCardSliceDefault;

/**
 * ProjectCard Shared Slice
 *
 * - **API ID**: `project_card`
 * - **Description**: ProjectCard
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectCardSlice = prismic.SharedSlice<
  "project_card",
  ProjectCardSliceVariation
>;

/**
 * Primary content in *Testimonials → Default → Primary*
 */
export interface TestimonialsSliceDefaultPrimary {
  /**
   * News Title field in *Testimonials → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.default.primary.news_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  news_title: prismic.KeyTextField;

  /**
   * News Content field in *Testimonials → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.default.primary.news_content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  news_content: prismic.KeyTextField;

  /**
   * News Image field in *Testimonials → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.default.primary.news_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  news_image: prismic.ImageField<never>;
}

/**
 * Primary content in *Testimonials → Items*
 */
export interface TestimonialsSliceDefaultItem {
  /**
   * Testimonial Name field in *Testimonials → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.items[].testimonial_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  testimonial_name: prismic.KeyTextField;

  /**
   * Testimonial Date field in *Testimonials → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.items[].testimonial_date
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  testimonial_date: prismic.KeyTextField;

  /**
   * Testimonial Content field in *Testimonials → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.items[].testimonial_content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  testimonial_content: prismic.KeyTextField;
}

/**
 * Default variation for Testimonials Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TestimonialsSliceDefaultPrimary>,
  Simplify<TestimonialsSliceDefaultItem>
>;

/**
 * Slice variation for *Testimonials*
 */
type TestimonialsSliceVariation = TestimonialsSliceDefault;

/**
 * Testimonials Shared Slice
 *
 * - **API ID**: `testimonials`
 * - **Description**: Testimonials
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSlice = prismic.SharedSlice<
  "testimonials",
  TestimonialsSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      ProductsDocument,
      ProductsDocumentData,
      ProductsDocumentDataSlicesSlice,
      ProjectsDocument,
      ProjectsDocumentData,
      ProjectsDocumentDataSlicesSlice,
      AllDocumentTypes,
      FeaturedProjectsSlice,
      FeaturedProjectsSliceDefaultPrimary,
      FeaturedProjectsSliceVariation,
      FeaturedProjectsSliceDefault,
      HomeAboutSectionSlice,
      HomeAboutSectionSliceDefaultPrimary,
      HomeAboutSectionSliceVariation,
      HomeAboutSectionSliceDefault,
      HomeHeroSlice,
      HomeHeroSliceDefaultPrimary,
      HomeHeroSliceVariation,
      HomeHeroSliceDefault,
      HomeProductsSliderSlice,
      HomeProductsSliderSliceDefaultPrimary,
      HomeProductsSliderSliceDefaultItem,
      HomeProductsSliderSliceVariation,
      HomeProductsSliderSliceDefault,
      ProductCardSlice,
      ProductCardSliceDefaultItem,
      ProductCardSliceVariation,
      ProductCardSliceDefault,
      ProjectCardSlice,
      ProjectCardSliceDefaultPrimaryRepeatableZoneItem,
      ProjectCardSliceDefaultPrimary,
      ProjectCardSliceVariation,
      ProjectCardSliceDefault,
      TestimonialsSlice,
      TestimonialsSliceDefaultPrimary,
      TestimonialsSliceDefaultItem,
      TestimonialsSliceVariation,
      TestimonialsSliceDefault,
    };
  }
}
