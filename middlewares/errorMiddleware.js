// middlewares/errorHandler.js
const createError = require('http-errors')
const fs = require('node:fs')
const path = require('path')

function notFoundHandler(req, res, next) {
  next(createError(404))
}

function errorHandler(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  const message = 'Error' + err.message
  const dateTime = new Date().toLocaleString()

  fs.createWriteStream(path.join('logs', 'error_logs.txt'), { flags: 'a' })
  fs.appendFileSync(
    path.join('logs', 'error_logs.txt'),
    dateTime + ' - ' + message + '\n'
  )

  // render the error page
  res.status(err.status || 500)
  res.render('error')
}

module.exports = {
  notFoundHandler,
  errorHandler
}
