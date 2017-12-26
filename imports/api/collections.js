import { Mongo } from 'meteor/mongo';

export const Schools = new Mongo.Collection('schools');//школа, универ, курсы, ....
export const Depts = new Mongo.Collection('depts');// Факультеты??
export const Groups = new Mongo.Collection('groups');//учебная группа, класс
export const Courses = new Mongo.Collection('courses');//Предметы - справочник
//Студенты и Преподы - это в Users (?)
export const Exams = new Mongo.Collection('exams');//Контрольная
export const Questions = new Mongo.Collection('questions');//Вопросы к контрольным (могут в разные контрольные входить) Может все-таки их в массив в документ контрольной?
export const Answers = new Mongo.Collection('answers');//Ответы студентов Результаты ответов.
// export const Results = new Mongo.Collection('results');// Нужна ли она? Можно в ответах вести оценки/

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('schools', () => Schools.find());
    Meteor.publish('depts', () => Depts.find());
    Meteor.publish('groups', () => Groups.find());
    Meteor.publish('courses', () => Courses.find());

    Meteor.publish('exams', () => Exams.find());
    Meteor.publish('questions', () => Questions.find());
}