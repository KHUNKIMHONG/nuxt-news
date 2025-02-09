// linkNavbar.ts
import { link } from './link';

export interface NavbarLink {
    name_en: string; // English name
    name_kh: string; // Khmer name
    path?: string; // Make this optional
    children?: NavbarLink[]; // This allows each child to have its own structure
}

const linkNavbar: NavbarLink[] = [
    { 
        name_en: 'HOME', 
        name_kh: 'ទំព័រដើម', // changed to name_kh
        path: link.home 
    },
    {
        name_en: 'PROFILE',
        name_kh: 'ប្រវត្ដិរូប', // changed to name_kh
        path: link.about 
    },
    {
        name_en: 'LESSONS',
        name_kh: 'មេរៀន', // changed to name_kh
        children: [
            { name_en: 'Code Compass', name_kh: 'ត្រីវិស័យ Code', path: link.codes },
            { name_en: 'SEO', name_kh: 'SEO', path: '/about' },
            { name_en: 'Marketing', name_kh: 'ទីផ្សារ', path: '/about' },
        ],
    },
    { 
        name_en: 'CONTACT', 
        name_kh: 'ទំនាក់ទំនង', // changed to name_kh
        path: link.contact  
    },
    { 
        name_en: 'FAQ', 
        name_kh: 'សំណួរគេសួរញឹកញាប់', // changed to name_kh
        path: link.faq 
    },
];

export default linkNavbar;
