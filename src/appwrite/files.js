import conf from '../conf/conf';

import { Client, ID, Databases, Storage, Account } from 'appwrite';

export class FileService {
  client = new Client();
  account;
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // file upload service

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log('Appwrite service :: uploadFile :: error', error);
      return false;
    }
  }

  async fileDelete(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log('Appwrite service :: deleteFile :: error', error);
      return false;
    }
  }

  filePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
  }
}

const fileService = new FileService();
export default fileService;
