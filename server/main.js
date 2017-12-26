import { Meteor } from 'meteor/meteor';

import {Courses, Depts, Exams, Groups, Schools} from '../imports/api/collections';

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
                if(d.groups) d.groups.forEach((g)=>{console.log("Group:" + g );Groups.insert({dept_id: d_id, title: g});});
                if(d.courses) d.courses.forEach((c)=>Courses.insert({dept_id: d_id, title: c}));
            });
        });

    const exams = [
        { title: 'This is exam 1', teacher: "Ivanoff", status: "assigned", deadline: "January 1, 2018 11:13:00", timeToComplete: 240 },
        //{number:1, question: 'Сколько у тебя рук', answers: [{variant:'Ноль', result:0},{variant:'Две', result:1},{variant:'Десять', result:0},], total:1}
        //{number:2, question: 'Отметьте времена года', answers: [{variant:'Зима', result:1},{variant:'Жара', result:0},{variant:'Лето', result:1},{variant:'Осень', result:1},], total:3}
        { title: 'This is exam 2', teacher: "Ivanoff", status: "closed", deadline: "October 13, 2017 11:13:00", passed: true, score: 78, timeToComplete: 240  },
        { title: 'This is exam 3', teacher: "Petroff", status: "closed", deadline: "October 13, 2017 11:13:00", passed: false, score: 7, timeToComplete: 240  },
        { title: 'This is exam 4', teacher: "Sidoroff", status: "open", deadline: "January 13, 2018 11:13:00", timeToComplete: 240  },
    ];

    if(! Exams.find().count()) exams.forEach((e)=>Exams.insert(e));
});
