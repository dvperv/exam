import { Meteor } from 'meteor/meteor';

import {Courses, Depts, Groups, Schools} from '../imports/api/collections';

Meteor.startup(() => {
    const schools = [
        {
            title: 'МГУ им. М.В. Ломоносова',
            depts: [
                {
                    title: 'ВМК',
                    groups: [
                        "101", "102", "103"
                    ],
                    courses: [
                        "Математический анализ",
                        "Линейная алгебра и аналитическая геометрия",
                        "История",
                        "Философия",
                    ],
                },
                {title: 'Экономический'},
                {title: 'Философский'},
            ]
        },
        {   title: 'ВШЭ',
            depts: [
                {title: 'Школа Бизнес-Информатики'},
                {title: 'Государственное и Муниципальное Управление'},
                {title: 'Экономика'},
            ] },
        {   title: 'МГТУ им. Баумана',
            depts: [
                {title: 'Физика'},
                {title: 'Прикладная математика'},
                {title: 'Защита информации'},
            ] },
        {   title: 'МГТУ МАМИ',
            depts: [
                {title: 'Сопротивления материалов'},
                {title: 'Экономический'},
            ] },
    ];
  // code to run on server at startup
    if (! Schools.find().count())
        schools.forEach((s)=>{
            let _id = Schools.insert({title: s.title});
            s.depts.forEach((d)=>{
                let d_id = Depts.insert({school_id: _id, title: d.title});
                if(d.groups) d.groups.forEach((g)=>{console.log("School:" + g );Groups.insert({school_id: _id, title: g});});
                if(d.courses) d.courses.forEach((c)=>Courses.insert({school_id: _id, title: c}));
            });
        });
});
