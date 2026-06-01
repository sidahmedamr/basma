// ========== ملف الترجمة ==========
const translations = {
    ar: {
        // القائمة
        home: 'الرئيسية',
        about: 'من نحن',
        members: 'الأعضاء',
        announcements: 'الإعلانات',
        goals: 'أهدافنا',
        projects: 'أعمالنا',
        contact: 'اتصل بنا',
        
        // الواجهة
        association_full_name: 'الجمعية الثقافية الشبابية بصمة',
        hero_tagline: 'معاً نصنع أثراً يبقى',
        latest_announcements: 'آخر الإعلانات',
        learn_more: 'اقرأ المزيد',
        
        // الأعضاء
        members_title: 'أعضاء الجمعية',
        members_subtitle: 'فريق العمل المؤسس للجمعية الثقافية الشبابية بصمة',
        founder_label: 'المؤسس والمنشئ',
        founder_bio: 'صاحب فكرة تأسيس الجمعية الثقافية الشبابية بصمة، يؤمن بأن الشباب قادر على إحداث التغيير الإيجابي في المجتمع من خلال العمل الجمعوي الهادف.',
        team_members: 'أعضاء الفريق',
        
        // من نحن
        about_title: 'من نحن',
        about_subtitle: 'تعرف على الجمعية الثقافية الشبابية بصمة',
        our_story: 'قصتنا',
        story_text_1: 'تأسست الجمعية الثقافية الشبابية "بصمة" في بلدية بومدفع، انطلاقاً من إيمان مجموعة من الشباب الطموح بأهمية العمل الجمعوي في تنمية المجتمع وتطوير قدرات الشباب.',
        story_text_2: 'جاءت فكرة التأسيس من الحاجة الملحة لخلق فضاء شبابي يجمع بين الثقافة والترفيه والتطوع، ويكون منصة لإبراز مواهب وإبداعات شباب المنطقة.',
        vision_mission: 'رؤيتنا ورسالتنا',
        vision: 'رؤيتنا',
        vision_text: 'بناء مجتمع شبابي واعٍ، مبدع، وفاعل يساهم في التنمية المحلية ويحمل قيماً إيجابية.',
        mission: 'رسالتنا',
        mission_text: 'تأطير الشباب وتنمية مهاراتهم من خلال أنشطة ثقافية، تربوية، وتطوعية هادفة، وخلق بيئة محفزة للإبداع والمبادرة.',
        our_values: 'قيمنا',
        value1_title: 'العمل الجماعي',
        value1_text: 'نؤمن بأن العمل بروح الفريق هو مفتاح النجاح',
        value2_title: 'الإبداع',
        value2_text: 'نشجع الأفكار الجديدة ونحتضن المواهب',
        value3_title: 'التطوع',
        value3_text: 'العطاء بدون مقابل هو جوهر عملنا',
        value4_title: 'المسؤولية',
        value4_text: 'نلتزم تجاه مجتمعنا ونسعى لإحداث أثر إيجابي',
        
        // الإعلانات
        announcements_title: 'الإعلانات والمنشورات',
        announcements_subtitle: 'آخر أخبار وفعاليات الجمعية الثقافية الشبابية بصمة',
        
        // الأهداف
        goals_title: 'أهدافنا',
        goals_subtitle: 'الأهداف التي تسعى الجمعية الثقافية الشبابية بصمة لتحقيقها',
        goal1_title: 'تنمية قدرات الشباب',
        goal1_text: 'توفير دورات تدريبية وورش عمل لتطوير المهارات الشخصية والمهنية للشباب',
        goal2_title: 'تنشيط الحياة الثقافية',
        goal2_text: 'تنظيم فعاليات ثقافية وفنية متنوعة لإثراء المشهد الثقافي المحلي',
        goal3_title: 'تشجيع العمل التطوعي',
        goal3_text: 'نشر ثقافة التطوع بين الشباب وإشراكهم في مبادرات مجتمعية هادفة',
        goal4_title: 'حماية البيئة',
        goal4_text: 'تنظيم حملات تنظيف وتشجير وتوعية بأهمية الحفاظ على البيئة',
        goal5_title: 'محو الأمية الرقمية',
        goal5_text: 'تقديم دورات في الإعلام الآلي والتكنولوجيا لمواكبة العصر الرقمي',
        goal6_title: 'العمل الخيري',
        goal6_text: 'تنظيم قوافل تضامنية ومساعدة الفئات المحتاجة في المنطقة',
        
        // الأعمال
        projects_title: 'أعمالنا ومشاريعنا',
        projects_subtitle: 'نماذج من الأنشطة والمشاريع التي أنجزتها الجمعية',
        cat_cultural: 'ثقافي',
        cat_training: 'تكويني',
        cat_environmental: 'بيئي',
        cat_charity: 'خيري',
        cat_sports: 'رياضي',
        cat_educational: 'تعليمي',
        project1_title: 'مهرجان الإبداع الشبابي',
        project1_text: 'تظاهرة ثقافية سنوية لعرض مواهب وإبداعات شباب المنطقة',
        project2_title: 'دورات إعلام آلي',
        project2_text: 'سلسلة دورات في الإعلام الآلي والبرمجة لفائدة الشباب',
        project3_title: 'حملة بومدفع خضراء',
        project3_text: 'مبادرة بيئية لتشجير الأماكن العامة وتنظيف المحيط',
        project4_title: 'قافلة رمضان',
        project4_text: 'قافلة تضامنية لتوزيع المساعدات على العائلات المحتاجة',
        project5_title: 'دوري كرة القدم',
        project5_text: 'تنظيم دوري رياضي لشباب بلدية بومدفع',
        project6_title: 'دروس الدعم المدرسي',
        project6_text: 'دروس مجانية لتلاميذ المنطقة في مختلف المواد',
        
        // اتصل بنا
        contact_title: 'اتصل بنا',
        contact_subtitle: 'نحن هنا للإجابة على استفساراتكم وتلقي اقتراحاتكم',
        contact_info_title: 'معلومات التواصل',
        address_label: 'العنوان',
        email_label: 'البريد الإلكتروني',
        phone_label: 'الهاتف',
        facebook_label: 'فيسبوك',
        send_message: 'أرسل رسالة',
        name_label: 'الاسم الكامل',
        subject_label: 'الموضوع',
        message_label: 'الرسالة',
        send_btn: 'إرسال الرسالة',
        
        // المعرض
        gallery_title: 'معرض الصور',
        gallery_subtitle: 'لحظات من أنشطة وفعاليات الجمعية الثقافية الشبابية بصمة',
        
        // النوافذ
        about_brief: 'جمعية ثقافية شبابية تأسست في بلدية بومدفع، تهدف إلى تأطير الشباب وتنمية مهاراتهم',
        goals_brief: 'نسعى لبناء جيل واعٍ ومبدع قادر على قيادة التغيير الإيجابي في المجتمع',
        projects_brief: 'مشاريع تطوعية وتعليمية وترفيهية هادفة تخدم شباب المنطقة',
        read_more: 'اقرأ المزيد',
        
        // التذييل
        footer_desc: 'الجمعية الثقافية الشبابية بصمة - بلدية بومدفع - دار الشباب زواوي بغدادي',
        quick_links: 'روابط سريعة',
        contact_us: 'اتصل بنا',
        address: 'دار الشباب زواوي بغدادي، بومدفع',
        follow_us: 'تابعنا',
        rights: 'جميع الحقوق محفوظة',
        
        dir: 'rtl'
    },
    en: {
        // Navigation
        home: 'Home',
        about: 'About Us',
        members: 'Members',
        announcements: 'Announcements',
        goals: 'Our Goals',
        projects: 'Our Work',
        contact: 'Contact Us',
        
        // Hero
        association_full_name: 'Basma Cultural Youth Association',
        hero_tagline: 'Together We Make a Lasting Impact',
        latest_announcements: 'Latest Announcements',
        learn_more: 'Learn More',
        
        // Members
        members_title: 'Association Members',
        members_subtitle: 'The founding team of Basma Cultural Youth Association',
        founder_label: 'Founder & Creator',
        founder_bio: 'The visionary behind the establishment of Basma Cultural Youth Association, believing that youth can bring about positive change in society through meaningful community work.',
        team_members: 'Team Members',
        
        // About
        about_title: 'About Us',
        about_subtitle: 'Get to know Basma Cultural Youth Association',
        our_story: 'Our Story',
        story_text_1: 'Basma Cultural Youth Association was founded in Boumedfaa municipality, driven by a group of ambitious youth who believe in the importance of community work in developing society and youth capabilities.',
        story_text_2: 'The idea of establishment came from the urgent need to create a youth space that combines culture, entertainment, and volunteering, serving as a platform to showcase the talents and creativity of the region\'s youth.',
        vision_mission: 'Our Vision & Mission',
        vision: 'Our Vision',
        vision_text: 'Building a conscious, creative, and active youth community that contributes to local development and carries positive values.',
        mission: 'Our Mission',
        mission_text: 'Empowering youth and developing their skills through meaningful cultural, educational, and volunteer activities, creating an environment that fosters creativity and initiative.',
        our_values: 'Our Values',
        value1_title: 'Teamwork',
        value1_text: 'We believe that working as a team is the key to success',
        value2_title: 'Creativity',
        value2_text: 'We encourage new ideas and embrace talents',
        value3_title: 'Volunteering',
        value3_text: 'Giving without expecting anything in return is the essence of our work',
        value4_title: 'Responsibility',
        value4_text: 'We are committed to our community and strive to make a positive impact',
        
        // Announcements
        announcements_title: 'Announcements & Posts',
        announcements_subtitle: 'Latest news and events of Basma Cultural Youth Association',
        
        // Goals
        goals_title: 'Our Goals',
        goals_subtitle: 'The goals that Basma Cultural Youth Association strives to achieve',
        goal1_title: 'Youth Capacity Development',
        goal1_text: 'Providing training courses and workshops to develop personal and professional skills of youth',
        goal2_title: 'Revitalizing Cultural Life',
        goal2_text: 'Organizing various cultural and artistic events to enrich the local cultural scene',
        goal3_title: 'Encouraging Volunteerism',
        goal3_text: 'Spreading the culture of volunteering among youth and involving them in meaningful community initiatives',
        goal4_title: 'Environmental Protection',
        goal4_text: 'Organizing cleaning and tree-planting campaigns and raising awareness about environmental conservation',
        goal5_title: 'Digital Literacy',
        goal5_text: 'Offering computer and technology courses to keep up with the digital age',
        goal6_title: 'Charitable Work',
        goal6_text: 'Organizing solidarity convoys and assisting vulnerable groups in the region',
        
        // Projects
        projects_title: 'Our Work & Projects',
        projects_subtitle: 'Examples of activities and projects accomplished by the association',
        cat_cultural: 'Cultural',
        cat_training: 'Training',
        cat_environmental: 'Environmental',
        cat_charity: 'Charity',
        cat_sports: 'Sports',
        cat_educational: 'Educational',
        project1_title: 'Youth Creativity Festival',
        project1_text: 'An annual cultural event to showcase the talents and creativity of the region\'s youth',
        project2_title: 'Computer Courses',
        project2_text: 'A series of computer and programming courses for youth',
        project3_title: 'Green Boumedfaa Campaign',
        project3_text: 'An environmental initiative to plant trees in public spaces and clean the surroundings',
        project4_title: 'Ramadan Convoy',
        project4_text: 'A solidarity convoy to distribute aid to families in need',
        project5_title: 'Football Tournament',
        project5_text: 'Organizing a sports tournament for the youth of Boumedfaa municipality',
        project6_title: 'School Support Lessons',
        project6_text: 'Free lessons for students in the region in various subjects',
        
        // Contact
        contact_title: 'Contact Us',
        contact_subtitle: 'We are here to answer your inquiries and receive your suggestions',
        contact_info_title: 'Contact Information',
        address_label: 'Address',
        email_label: 'Email',
        phone_label: 'Phone',
        facebook_label: 'Facebook',
        send_message: 'Send a Message',
        name_label: 'Full Name',
        subject_label: 'Subject',
        message_label: 'Message',
        send_btn: 'Send Message',
        
        // Gallery
        gallery_title: 'Photo Gallery',
        gallery_subtitle: 'Moments from the activities and events of Basma Cultural Youth Association',
        
        // Cards
        about_brief: 'A cultural youth association founded in Boumedfaa municipality, aiming to empower youth and develop their skills',
        goals_brief: 'We strive to build a conscious and creative generation capable of leading positive change in society',
        projects_brief: 'Voluntary, educational, and recreational projects serving the youth of the region',
        read_more: 'Read More',
        
        // Footer
        footer_desc: 'Basma Cultural Youth Association - Boumedfaa - Dar Chebab Zouaoui Baghdad',
        quick_links: 'Quick Links',
        contact_us: 'Contact Us',
        address: 'Dar Chebab Zouaoui Baghdad, Boumedfaa',
        follow_us: 'Follow Us',
        rights: 'All Rights Reserved',
        
        dir: 'ltr'
    }
};