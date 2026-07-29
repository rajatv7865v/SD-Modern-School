export type GalleryItem = {
  id: number;
  category: string;
  title: string;
  image: string;
};

const STUDENT_IMAGE_COUNT = 43;

/** All student photos from /public/student */
export const studentGalleryImages: GalleryItem[] = Array.from(
  { length: STUDENT_IMAGE_COUNT },
  (_, index) => {
    const num = String(index + 1).padStart(2, '0');
    return {
      id: index + 1,
      category: 'students',
      title: `School Moment ${index + 1}`,
      image: `/student/student-${num}.jpeg`,
    };
  }
);

/** A few student photos for the homepage preview */
export const homeGalleryPreview = studentGalleryImages.slice(0, 8).map((item) => item.image);
