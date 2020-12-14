// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// 嗯，这个功能不错，但是使用这个的话，后端api的逻辑就被迫放到这里，跟前端代码存在位置上的冲突，感觉怪的很；后端路由什么的还是放在backend中做吧
export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
