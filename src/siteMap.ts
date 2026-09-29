export interface NavItem {
  slug: string;
  title: string;
  children?: NavItem[];
}

// Mirrors the original Weebly menu hierarchy.
export const siteMap: NavItem[] = [
  { slug: '', title: 'HJEM' },
  {
    slug: 'om-oss',
    title: 'OM OSS',
    children: [{ slug: 'fra-bistand-til-utdanning', title: 'Fra Bistand til Utdanning' }],
  },
  {
    slug: 'vart-arbeid',
    title: 'VÅRT ARBEID',
    children: [
      { slug: 'barnehjem', title: 'Barnehjem' },
      {
        slug: 'skoleprosjekt',
        title: 'Skoleprosjekt',
        children: [{ slug: 'oppdatering-skoleprosjekt', title: 'Oppdatering Skoleprosjekt' }],
      },
      { slug: 'studentprogram', title: 'Studentprogram' },
      { slug: 'utfasing-til-juni-2019', title: 'Utfasing til juni 2019' },
      { slug: 'thearys-story-no', title: 'Thearys story' },
    ],
  },
  {
    slug: 'in-english',
    title: 'IN ENGLISH',
    children: [
      { slug: 'our-goals', title: 'Our Goals' },
      {
        slug: 'school-project',
        title: 'School Project',
        children: [
          {
            slug: 'update-school-project',
            title: 'Update School Project',
            children: [
              {
                slug: 'update-april-2015',
                title: 'UPDATE APRIL 2015: SAVE THE CHILDREN CAMBODIA EVALUATION',
              },
              { slug: 'updates-2014', title: 'Updates 2014: Work in Progress' },
            ],
          },
        ],
      },
      {
        slug: 'student-program',
        title: 'Student Program',
        children: [{ slug: 'thearys-story-en', title: 'Thearys story' }],
      },
      { slug: 'phasing-out-towards-june-2019', title: 'Phasing out towards June 2019' },
    ],
  },
  { slug: 'jubileumsside-2013', title: 'Jubileumsside 2013' },
];

export function flatten(items: NavItem[], out: NavItem[] = []): NavItem[] {
  for (const item of items) {
    out.push(item);
    if (item.children) flatten(item.children, out);
  }
  return out;
}
