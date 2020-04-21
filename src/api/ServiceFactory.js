import UserService from './user-service/user.service'

const services = {
  users: UserService
}

export const ServiceFactory = {
  get: name => services[name]
}
