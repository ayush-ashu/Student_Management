export class Teacher {
    public userName: string;
    public fullName: string;
    public branch: string;
    public subject: string;
    public semester: string;
    public password: string;

    constructor(userName: string, fullName: string, branch: string, subject: string, semester: string, password: string) {
        this.userName = userName;
        this.fullName = fullName;
        this.branch = branch;
        this.subject = subject;
        this.semester = semester;
        this.password = password;
    }
}