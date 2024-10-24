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
        name_en: 'ABOUT',
        name_kh: 'អំពីការ', // changed to name_kh
        children: [
            { name_en: 'Development', name_kh: 'អភិវឌ្ឍន៍វេបសាយ', path: link.about },
            { name_en: 'Mission', name_kh: 'ភារកិច្ច', path: '/about/mission' },
        ],
    },
    {
        name_en: 'SERVICES',
        name_kh: 'សេវាកម្ម', // changed to name_kh
        children: [
            { name_en: 'Web Development', name_kh: 'អភិវឌ្ឍន៍វេបសាយ', path: '/services/web-development' },
            { name_en: 'SEO', name_kh: 'SEO', path: '/services/seo' },
            { name_en: 'Marketing', name_kh: 'ទីផ្សារ', path: '/services/marketing' },
        ],
    },
    { 
        name_en: 'CONTACT', 
        name_kh: 'ទំនាក់ទំនង', // changed to name_kh
        path: '/contact' 
    },
];

export default linkNavbar;
