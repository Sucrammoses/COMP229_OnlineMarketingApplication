const config = {
env: process.env.NODE_ENV || 'development', 
port: process.env.PORT || 3000,
jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
mongoUri: process.env.MONGODB_URI || "mongodb+srv://mcharl22:5Jo3eQPUx2u7uvgV@cluster0.kyvsle6.mongodb.net/Marketplace?retryWrites=true&w=majority" ||
process.env.MONGO_HOST || + (process.env.IP || 'localhost') + ':' + 
(process.env.MONGO_PORT || '27017') +
'/mernproject' 
}
export default config
/*
const config = { env: process.env.NODE_ENV || 'development', 
 port: process.env.PORT || 3000,
 jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
 mongoUri: process.env.MONGODB_URI || "mongodb+srv://zmalek:QPPeaH0IhRTVL0UD@cluster0.xtiiqxk.mongodb.net/Skeleton?retryWrites=true&w=majority"||
process.env.MONGO_HOST ||
 'mongodb://' + (process.env.IP || 'localhost') + ':' + 
(process.env.MONGO_PORT || '27017') +
 '/mernproject' 
 }
 export default config*/
