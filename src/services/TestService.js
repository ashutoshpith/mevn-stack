import Api from '@/services/Api'

export default {
  testStatus () {
    return Api().get('test')
  }
}
