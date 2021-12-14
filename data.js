const stuData =[
    {
        Id: 01,
        Name: 'Sajjad',
        Roll: 003,
        Marks : {
            Bangla : 60,
            EngLish : 75,
            Math     : 80,
            Science  : 70,
            Ict     : 75,
            Reli   : 65,
        }
    },  {
        Id: 02,
        Name: 'Aajad',
        Roll: 053,
        Marks : {
            Bangla : 60,
            EngLish : 75,
            Math     : 80,
            Science  : 70,
            Ict     : 75,
            Reli   : 65,
        }
    },  {
        Id: 05,
        Name: 'Ajim',
        Roll: 060,
        Marks : {
            Bangla : 60,
            EngLish : 75,
            Math     : 80,
            Science  : 70,
            Ict     : 75,
            Reli   : 65,
        }
    },  {
        Id: 04,
        Name: 'Habib',
        Roll: 083,
        Marks : {
            Bangla : 60,
            EngLish : 75,
            Math     : 80,
            Science  : 70,
            Ict     : 75,
            Reli   : 65,
        }
    },  {
        Id: 07,
        Name: 'Rakib',
        Roll: 543,
        Marks : {
            Bangla : 60,
            EngLish : 75,
            Math     : 80,
            Science  : 70,
            Ict     : 75,
            Reli   : 65,
        }
    },  {
        Id: 09,
        Name: 'Kalam',
        Roll: 48,
        Marks : {
            Bangla : 60,
            EngLish : 75,
            Math     : 80,
            Science  : 70,
            Ict     : 75,
            Reli   : 65,
        }
    },  {
        Id: 011,
        Name: 'Abir',
        Roll: 703,
        Marks : {
            Bangla : 60,
            EngLish : 75,
            Math     : 80,
            Science  : 70,
            Ict     : 75,
            Reli   : 65,
        }
    },  {
        Id: 41,
        Name: 'Kabir',
        Roll: 203,
        Marks : {
            Bangla : 60,
            EngLish : 75,
            Math     : 80,
            Science  : 70,
            Ict     : 75,
            Reli   : 65,
        }
    },
]

const devs = [
    {
        Name : 'Nur Amin',
        Skill : 'MERN'
    }, {
        Name : 'Sabbir',
        Skill : 'LARAVEL'
    }, {
        Name : 'Abu Sayeed',
        Skill : 'WORDPRESS'
    }, {
        Name : 'Mamun',
        Skill : 'DJANGO'
    }, {
        Name : 'Rayhan',
        Skill : 'GOLAN'
    },
    {
        Name : 'Sufiyan',
        Skill : 'PHP'
    },{
        Name : 'Humayon',
        Skill : 'Wordpress'
    },
]


localStorage.setItem('StudentData',JSON.stringify(stuData))
localStorage.setItem('DevsData', JSON.stringify(devs))