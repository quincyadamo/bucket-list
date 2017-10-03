export class Bucket {
    public _id: String;
    public title: String = '';
    public description: String = '';
    public accomplished: Boolean = false;
    public tagged_user_id: String;
    public owner_id: String;
    public createdAt: Date;
}
