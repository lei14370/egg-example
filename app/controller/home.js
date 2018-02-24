const Controller=require('egg').Controller;
const fs=require('fs');
class HomeController extends Controller{
    async index(){
        this.ctx.body='Hollo world';
    }
}

module.exports=HomeController;