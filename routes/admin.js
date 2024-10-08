const express = require('express')
const AdminController = require('../controllers/AdminController')
const adminMiddleware = require('../middlewares/adminMiddleware')
const router = express.Router()

router.get('/', adminMiddleware, AdminController.index)

router.get('/movies', adminMiddleware, AdminController.allMovies)

router.get('/movies/create', adminMiddleware, AdminController.createMovie)

router.post('/movies/create', adminMiddleware, AdminController.storeMovie)

router.get('/movies/edit/:id', adminMiddleware, AdminController.showEditMovie)

router.post('/movies/edit/:id', adminMiddleware, AdminController.editMovie)

router.post('/movies/:id', AdminController.deleteMovie)

router.get('/genres', adminMiddleware, AdminController.allGenres)

module.exports = router
