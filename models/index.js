const mongoose = require('mongoose');
const Post = require('./post');
const Event = require('./event');

const url = 'mongodb://localhost:27017/vietcode';
mongoose.connect(url, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
});


// seed database
// ================= POST ===============================
let posts = [
    {
        author: "duc0905",
        markdown: `# h1\n## h2\n ### h3\n`,
        date: '2020-02-02T08:51:57.154Z'
    },
    {
        author: "ntm.tramy.136",
        markdown: `# hello\n## world\n ### !\n`,
        date: '2020-01-02T08:37:57.154Z'
    },
    {
        author: "Some one",
        markdown: `This is just plain text, no markdown`,
        date: '2020-02-01T08:10:57.154Z'
    }
]

Post.deleteMany({}, (err) => {
    if(err) {
        console.log('Failed to clear database');
    } else {
        Post.insertMany(posts, (err, data) => {
            if(err) {
                return console.log("err");
            } else {
                return console.log("created seed posts");
            }
        });
    }
});

// =================== EVENT==========================
let events = [
    {
        title: "Ngày hội định hướng lập trình viên Codemaps",
        date: "27 / 05 / 2018",
        name: "Codemap",
        markdown: `1. CODEMAPS 2018 là gì?

    CodeMaps 2018 là sự kiện thường niên tổ chức bởi Vietcode Project với mục đích định hướng giúp các bạn trẻ tại Hà Nội có một cái nhìn tổng thể và đúng đắn về Công nghệ Thông tin. Đến với CodeMaps, người tham dự sẽ được nghe chia sẻ từ các chuyên gia trong ngành về nhiều lĩnh vực khác nhau như Machine Learning, Mobile Apps, cùng với việc trải nghiệm các sản phẩm công nghệ mới nhất hiện nay.

    2. Đối tượng tham gia

     Các bạn học sinh, sinh viên trên địa bàn Thành phố Hà Nội có niềm yêu thích và mong muốn tìm hiểu về bộ môn Khoa học Máy tính và Công nghệ, đặc biệt là Công nghệ Thông tin.

    3. Hình thức tổ chức

    CODEMAPS 2018 bao gồm các sessions về các chủ đề khác nhau
        1. Phòng 1: Mobile app Development Session 
    Phòng 2: Machine learning / AI
    2. Phòng 1: Frontend Development 
        Phòng 2: Công nghệ Blockchain
        3. Phòng 1: Lập trình game bằng Unity
    Phòng 2: Công nghệ thực tế ảo (AR/VR/MR)
        4. Phòng 1: Arduino / Lập trình phần cứng IOT
     Phòng 2: Security

        4.  Tại sao lại là CODEMAPS 2018?
        - Cơ hội được định hướng về những lĩnh vực trong ngành Công nghệ Thông tin do những người có kinh nghiệm trong ngành.
        - Tìm ra niềm đam mê Công nghệ thông tin trong mình, từ đó định hướng cho bạn con đường muốn theo đuổi.
        - Cơ hội để kết bạn và chia sẻ đam mê với một công đồng chung niềm yêu thích CNTT.

        Và quan trọng nhất là với bao nhiêu sự tâm huyết kia, Vietcode dành tặng các bạn “món quà” CodeMaps 2018 này hoàn toàn miễn phí! Vậy thật đáng để các bạn chờ đợi form đăng ký được mở ra phải không nào! Đừng để lỡ mất cơ hội tuyệt vời này nhé! Cảm ơn và hẹn gặp lại mọi người tại CodeMaps 2018: Ngày Định Hướng cho Lập trình viên! 

        Và tất nhiên, đừng quên sạc đầy pin và mang theo laptop của bạn nhé! `,
        date: '2020-02-01T08:10:57.154Z',
        photos: [
            '33693846_1378720065606761_1583535054552825856_n.jpg',
            '33694331_1378728775605890_7768021853209100288_n.jpg',
            '33740347_1378720125606755_3304035306210066432_n.jpg',
            '33806435_1378719595606808_8208017119263064064_n.jpg',
            '33900831_1378720055606762_8236694783402180608_n.jpg',
            '33964976_1378719922273442_7239196961142734848_n.jpg'
        ],
        main_photos: {
            square: "main-square.jpg",
            rect: "main-rect.jpg"
        }
    },
    {
        title: "Hội chợ công nghệ Cyberpiece",
        date: "24/01/2018",
        name: "Cyberpiece",
        markdown: `CYBERPIECE - Hội chợ triển lãm công nghệ Cyberpiece - sự hợp tác đầu tiên của Vietcode cùng với Câu lạc bộ công nghệ ADaPT thuộc trường THPT Chuyên Đại học Sư Phạm. Cyberpiece là nơi mà người tham gia có thể trải nghiệm công nghệ một cách hoàn hảo và đa dạng nhất, từ Kĩ thuật Máy tính, Khoa học Máy tính cho đến Công nghệ Thông tin. Tại 12 booths khác nhau, mọi người được tham gia những bài giảng, được thực hành trên những sản phẩm IT, AI, Web Developing, Robot,.. Các booths đều được sở hữu bởi dàn khách mời là các bạn học sinh THPT đam mê công nghệ và rất tài năng. Chính họ đã tạo nên những sản phẩm vô cùng độc và lạ !!! Đến với sự kiện, các bạn không những được học hỏi, khám phá thêm được nhiều điều mới mẻ mà còn có cơ hội tìm được những người “đồng chí” có chung đam mê, sở thích. Hội chợ thu hút hơn 400 người tham dự đã phần nào nói lên sức nóng của sự kiện phải không nào!`,
        photos: [
            "26907007_1291644747647627_7331026554768414442_n.jpg",
            "26907561_1291647370980698_5411765807947706949_n.jpg",
            "26992288_1291646347647467_4334484223696111965_n.jpg",
            "27067046_1291645240980911_1166981342711596155_n.jpg",
            "27067690_1291647574314011_2567915767021761364_n.jpg",
            "27337178_1291647220980713_2470707175154580450_n.jpg"
        ],
        main_photos: {
            square: "main-square.jpg",
            rect: "main-rect.jpg"
        }
    },
    {
        
        title: "Hacker 101",
        date: "03 / 09 / 2017",
        name: "Hacker101",
        markdown: `Hacker 101
                    *MIỄN PHÍ VÉ VÀO CỬA, KHÔNG GIỚI HẠN ĐỘ TUỔI, KHÔNG YÊU CẦU CÓ KINH NGHIỆM*
                    ĐỊA ĐIỂM: Tầng 3, Học Viện Tài Chính, Số 1 Hoàng Đạo Thuý, Cầu Giấy, Hà Nội
                    THỜI GIAN: 14h - 17h ngày 3/9 (CHỦ  NHÂT) 
                    Đúng như tên của event mùa năm nay, hi đến với Event Hacker 101 bạn sẽ được trải nghiệm 1 ngày làm HACKER!
                    Vietcode lần này mang đến cho các bạn một trải nghiệm về bảo mật mạng nội bộ:
                    1. An ninh mạng.
                    2. Thâm nhập mạng LAN bằng NetCut .
                    3. Tự bảo vệ bản thân từ tấn công sử dung NetCut
                    Với chủ đề về NetCut, các bạn sẽ được giảng dạy và nghiên cứu sâu những bí mật của NetCut, tổng quan về tấn công arpspoof và biện pháp tối ưu. Người giảng dạy sẽ là những người vô cùng trẻ nhưng dày dặn kinh nghiệm đến từ Y.I.T
                    Như đã nói đây là một buổi trải nghiệm. CHÍNH VÌ VẬY bạn sẽ được thực hành xâm nhập mạng LAN, block các kết nối và ….. ă n c ắ p d a t a (sử dụng router cá nhân nên hoàn toàn không phi phạm pháp luật)`,
        photos: [
            "18301889_1210395145772588_2796880592283052671_n.jpg",
            "21463272_1210394999105936_4519716764521748106_n.jpg",
            "21463355_1210394819105954_3597870157838411543_n.jpg",
            "21617818_1210394735772629_5430557186260601146_n.jpg",
            "21751644_1210394872439282_5540447239815182036_n.jpg",
            "21751671_1210395175772585_6111434314331605738_n.jpg"
        ],
        main_photos: {
            square: "main-square.jpg",
            rect: "main-rect.jpg"
        }
    },
    {
        title: "IntelligenceX",
        date: "26/05/2019",
        name: "IntelligenceX",
        markdown: `
    IntelligenceX

    Hội chợ công nghệ IntelligenceX giúp người tham gia có cơ hội trải nghiệm các sản phẩm thông minh được tạo bởi từ những học sinh, sinh viên trong các trường THPT tới các công ty, start up chuyên sâu trong các ngành như giáo dục, công nghiệp, và giải trí. Qua các chia sẻ của các diễn giả đến từ các nhóm học sinh, công ty nói trên IntelligenceX hứa hẹn sẽ đem lại một cái nhìn sâu hơn về quá trình phát triển của lĩnh vực AI, cũng như những tiềm năng và những góc khuất trong lĩnh vực này.`,
        photos: [
            "60979992_1698369616975136_7959449481894690816_n.jpg",
            "61061924_1698369323641832_7184830616569905152_n.jpg",
            "61097665_1698369490308482_2958749712619929600_n (1).jpg",
            "61109271_1698369073641857_2639192510731124736_n.jpg",
            "61131921_1698369136975184_1401230018008317952_n.jpg",
            "61453748_1698369213641843_8794300899859103744_n.jpg"
        ],
        main_photos: {
            square: "main-square.jpg",
            rect: "main-rect.jpg"
        }
    },
    {
        title: 'Vietcode 2017 - Website of your own',
        date: '13 / 08 / 2017',
        name: 'Vietcode2017',
        markdown: `Vietcode 2017 - Website of your own
                    BUỔI TỌA ĐÀM VỀ STARTUP NGÀNH STEM VÀ LẬP TRÌNH WEBSITE
                        
                    ❓ Bạn muốn tự tạo Blog cá nhân hoặc website bán hàng?
                    ❓ Bạn yêu thích ngành Khoa học Máy tính nhưng vẫn đang phân vân có nên lựa chọn ngành này để theo đuổi?
                    ❓ Bạn chưa biết nhiều về Công nghệ Thông tin và muốn nghe lời khuyên của những người thành đạt trong lĩnh vực này?
                        
                    Nếu bạn tìm thấy bản thân mình trong những câu hỏi trên thì sự kiện "Website in the making" là câu trả lời dành cho bạn:
                        
                    MIỄN PHÍ VÉ VÀO CỬA + KHÔNG GIỚI HẠN ĐỘ TUỔI + KHÔNG CẦN MANG MÁY TÍNH CÁ NHÂN
                    ĐĂNG KÝ NGAY: https://goo.gl/HiciZo
                        
                    Sự kiện đánh dấu sự trở lại của Vietcode Project 2.0. Hãy đến để học cách tạo website riêng của bản thân trên nền tảng Wordpress và có cơ hội được nghe chia sẻ từ những khách mời nổi tiếng là những doanh nhân thành đạt trong ngành STEM:
                        
                    - Anh Nguyễn Anh Tuấn: Founder Trung tâm Giáo dục Khoa học Công nghệ Táy Máy Tò Mò
                    - Anh Nguyễn Việt Hùng: CEO Trung tâm Đào tạo Thiết kế ColorME
                        
                    Những bạn không biết gì về lập trình đều có thể tham gia, chúng mình sẽ hướng dẫn chi tiết từ đầu cho các bạn!`,
        photos: [
            '20729423_1188939311251505_1735539878220637424_n.jpg',
            '20729669_1188938614584908_4522957005591929732_n.jpg',
            '20729669_1188938614584908_4522957005591929732_n.jpg',
            '20799354_1188938621251574_300905081368978194_n.jpg',
            '20799354_1188938621251574_300905081368978194_n.jpg',
            '20799911_1188938361251600_4387782994455331356_n.jpg'
        ],
        main_photos: {
            square: "main-square.jpg",
            rect: "main-rect.jpg"
        }
    },
    {
        title: "Tech Invasion",
        date: "26/05/2019",
        name: "TechInvasion",
        markdown: `
Tech invasion
1. Giới thiệu về TECH INVASION 2018
Hội nghị Cách mạng Công nghệ Tech Invasion 2018 cung cấp cho người tham gia cái nhìn tổng quát nhất về những ảnh hưởng của công nghệ thông tin tới các lĩnh vực khác nhau trong đời sống, từ sự thống trị của Grab trong ngành giao thông vận tải cho đến các ứng dụng như PayPal hay MoMo trong ngành tài chính và tiền tệ. Qua các sessions chuyên môn với sự góp mặt của các CEO và chuyên gia trong các lĩnh vực như Edtech (Công nghệ giáo dục), Fintech (Công nghệ tài chính),... các bạn trẻ tham dự sẽ có định hướng rõ ràng hơn về ngành nghề và lĩnh vực công nghệ mình sẽ theo đuổi trong tương lai.

2. Đối tượng tham gia
Các bạn học sinh THPT, sinh viên đại học trên địa bàn thành phố Hà Nội có niềm yêu thích và mong muốn tìm hiểu về ngành Công nghệ Thông tin. 

3. Hình thức tổ chức
Tech Invasion 2018 là hội nghị gồm nhiều sessions, diễn ra song song trong 3 khung giờ có nội dung khác nhau, cụ thể:
Khung giờ 1:
-  Phòng 1: Business
Khung giờ 2:
-  Phòng 1: Edtech 
-  Phòng 2: On-demand 
Khung giờ 3:
-  Phòng 1: Social (Ứng dụng xã hội)
-  Phòng 2: Entertainment (Giải trí)

Các sessions được phụ trách trực tiếp bởi các diễn giả là các chuyên gia nổi tiếng trong ngành. Đến với sự kiện lần này, các bạn sẽ học thêm được những kiến thức và lắng nghe lời khuyên từ những người dày dạn kinh nghiệm, giúp bạn hiểu rõ hơn về cách áp dụng công nghệ vào giải quyết các bài toán thực tế trong cuộc sống.

4.  Tại sao lại là Tech Invasion 2018?

- Nếu như những buổi hội thảo thông thường chỉ chú trọng vào một chủ đề nhất định, thì Tech Invasion 2018 mang đến cho người tham gia một cái nhìn khái quát và rộng mở hơn về nhiều lĩnh vực quen thuộc như giáo dục, tài chính, thương mại được "cách mạng hóa" bởi công nghệ 4.0.

- Các khách mời của Tech Invasion 2018 đều là chuyên gia của các công ty startup, công ty công nghệ hàng đầu với hiểu biết sâu rộng về lĩnh vực chuyên môn của mình, đảm bảo sẽ đem đến cho người tham gia một góc nhìn mới lạ về ngành CNTT.

- Cơ hội để kết bạn và chia sẻ đam mê với một cộng đồng chung niềm yêu thích CNTT.

Và quan trọng hơn hết, bằng toàn bộ tâm huyết của đội ngũ Vietcode Project Gen 3, Tech Invasion 2018 chính là "món quà" chúng mình dành tặng miễn phí cho tất cả mọi người!!! Thật đáng để các bạn dành chút thời gian điền vào form đăng kí phải không nào!!! Đừng để vuột mất cơ hội tuyệt vời này nhé! Cảm ơn và hẹn gặp lại mọi người tại Hội nghị cách mạng Công nghệ TECH INVASION 2018!!! `,
        photos: [
            "41286855_1491831874295579_7624144962803728384_n.jpg",
            "41394319_1491832324295534_453477507698524160_n.jpg",
            "41396107_1491854820959951_420148849244372992_n.jpg",
            "41454907_1491831950962238_917853018169278464_n.jpg",
            "41479987_1491832100962223_114254775842766848_n.jpg",
            "41529187_1491832137628886_7270529640920252416_n.jpg"
        ],
        main_photos: {
            square: "main-square.jpg",
            rect: "main-rect.jpg"
        }
    },
    {
        title: 'Vietcode Conference',
        date: '14 / 08 / 2016',
        name: 'VietcodeConference',
        markdown: `Vietcode Conference
                    Vietcode Conference là event đầu tiên của Vietcode Project, được lập ra với mục đích truyền cảm hứng cho các bạn trẻ đến với bộ môn Khoa học Máy tính.`,
        photos: [
            '14045621_919236871555085_8990733004933301881_n.jpg',
            '14045860_922123454599760_7479608231192202915_n.jpg',
            '14054110_922123791266393_3240193320745222854_n.jpg',
            '14054977_919239914888114_1807554840201967286_n.jpg',
            '14068111_919239034888202_4748674995696665009_n.jpg',
            '14100349_922123714599734_384447790915540656_n.jpg'
        ],
        main_photos: {
            square: "main-square.jpg",
            rect: "main-rect.jpg"
        }
    }
    
];

Event.deleteMany({}, (err) => {
    if(err) {
        console.log('Failed to clear database');
    } else {
        Event.insertMany(events, (err, data) => {
            if(err) {
                return console.log("err");
            } else {
                return console.log("created seed events");
            }
        });
    }
});

// ====================================================

setTimeout(() => {
    Event.find({}, (err, data) => {
        let event = data[0];
        Event.findById(event._id, (err, data) => {
            console.log(data.title);
        })
    })
}, 2000);

module.exports = {
    Post,
    Event
}