import { getHomeCasual } from 'api'

export default {
    // 1.获取首页轮播图
    async reqHomeCasual({ commit}) { 
        const result = await getHomeCasual();
        
    }
}