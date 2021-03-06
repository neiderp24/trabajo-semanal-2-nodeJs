const { User } = require('../models/user.model');


const { catchAsync } = require('../utils/catchAsync')

const getAllUsers = catchAsync(async (req, res, next) => {
  
    const users = await User.findAll();

    res.status(200).json({
      users,
    });
 
});

const createUser = catchAsync(async (req, res, next) => {

    const { name, email, role, password } = req.body;

    const newUser = await User.create({ name, email, role, password });

    res.status(201).json({ newUser });
 
});

const getUserById = catchAsync(async (req, res, next) => {
  
    const { user } = req;

    res.status(200).json({
      user,
    });
});

const updateUser = catchAsync(async (req, res, next) => {
  
    const { user } = req;
    // const { id } = req.params;
    const { name, email } = req.body;

    await user.update({ name, email });

    res.status(200).json({ status: 'succes' });
 
});

const deleteUser = catchAsync(async (req, res, next) => {
  
    const { user } = req;

    await user.update({ status: 'deleted' }),
      res.status(200).json({
        status: 'succes',
      });

});

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
