// linkNavbar.ts
import { link } from './linkIterm';

export interface SidebarLink {
    name_en: string; // English name
    name_kh: string; // Khmer name
    path?: string; // Optional path
    icon?: string; // Optional icon
    iconColor?: string; // Optional icon color
    children?: SidebarLink[]; // Nested children
}

const linkSidebar: SidebarLink[] = [
    { 
        name_en: 'Dashboard', 
        name_kh: 'ផ្ទាំងគ្រប់គ្រង',
        icon: "mdi:view-dashboard", // Icon for Dashboard
        path: link.home,
    },
    {
        name_en: 'ABOUT',
        name_kh: 'អំពីការ',
        icon: "mdi:information", // Icon for About
        iconColor: "text-blue-500",
        children: [
            { 
                name_en: 'About Me', 
                name_kh: 'អំពីខ្ញុំ', 
                path: link.about 
            },
            { 
                name_en: 'Mission', 
                name_kh: 'ភារកិច្ច', 
                path: '/admin' 
            },
        ],
    },
    {
        name_en: 'LESSONS',
        name_kh: 'មេរៀន',
        icon: "mdi:book", // Icon for Lessons
        children: [
            { 
                name_en: 'Code Compass', 
                name_kh: 'ត្រីវិស័យ Code', 
                path: link.codes 
            },
            { 
                name_en: 'SEO', 
                name_kh: 'SEO', 
                path: '/about' 
            },
            { 
                name_en: 'Marketing', 
                name_kh: 'ទីផ្សារ', 
                path: '/about' 
            },
        ],
    },
    { 
        name_en: 'CONTACT', 
        name_kh: 'ទំនាក់ទំនង',
        icon: "mdi:phone", // Icon for Contact
        iconColor: "text-purple-500",
        path: link.contact  
    },
    { 
        name_en: 'FAQ', 
        name_kh: 'សំណួរគេសួរញឹកញាប់',
        icon: "mdi:help-circle", // Icon for FAQ
        iconColor: "text-orange-500",
        path: link.faq 
    },
];

export default linkSidebar;

