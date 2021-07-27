export default class User {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.nickname = obj.nickname;
    this.role = obj.role;
    this.username = obj.username;
    this.password = obj.password;
    this.team = obj.team;
    this.email = obj.email;
    this.birthdate = obj.birthdate;
  }
}
