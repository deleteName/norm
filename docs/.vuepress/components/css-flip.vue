<template>
    <div class="css-flip">
        <!-- 基础节点 -->
        <div class="wrap">
            <div v-for="item in imgList" class="img-wrap" ref="imgRef" :key="item.id">
                <img :src="require('../public/'+ item.url +'.jpg')" />
            </div>
        </div>

        <!-- 事件按钮 -->
        <button @click="random">乱序</button>
        <button @click="add">添加</button>
        <button @click="remove">删除</button>
    </div>
</template>

<script>
export default {
    name: 'css-flip',
    data() {
        return {
            imgList: []
        }
    },
    methods: {
        // 获取元素边界
        getBounding() {
            return this.imgRef.map(node => {
                let rect = node.getBoundingClientRect()
                let { top, left } = rect
                return { top, left }
            })
        },
        // 随机添加元素
        add() {
            let random = Math.floor(Math.random() * (8 - 1) + 1)

            this.imgList.splice(random, 0, {
                id: this.uuid(),
                url: 'test-image ('+ random +')',
            })
        },
        // 随机元素位置
        random() {
            this.imgList.sort(() => Math.random() - 0.5)
        },
        // 随机删除元素
        remove() {
            let random = Math.floor(Math.random() * (8 - 1) + 1)

            this.imgList.splice(random, 1)
        },
        // 生成唯一id
        uuid() {
            function S4() {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            }
            return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
        }
    },
    created() {
        for( let i = 1 ; i < 9 ; i++) {
            this.imgList.push({
                id: this.uuid(),
                url: 'test-image ('+i+')',
            })
        }
    },
    mounted () {
        // 保存图片节点
        this.imgRef = this.$refs.imgRef
    },
    watch: {
        imgList() {
            this.imgRef = this.$refs.imgRef
            // 获取元素位移前位置
            let prevPositions = this.getBounding()
            this.$nextTick(() => {
                // 获取元素位移后位置
                let currentPositions = this.getBounding()

                this.imgRef.forEach((imgRef, imgIndex) => {
                    // 防止在新增元素时获取不到报错问题
                    if (!prevPositions[imgIndex]) return 
                    // 当前图片前后位置偏移坐标计算
                    const currentPosition = currentPositions[imgIndex]
                    const prevPosition = prevPositions[imgIndex]
                    const invert = {
                        left: prevPosition.left - currentPosition.left,
                        top: prevPosition.top - currentPosition.top,
                    }

                    // 第一步动画偏移至之前位置，然后再回到应有位置
                    const keyframes = [
                        {
                            transform: `translate(${invert.left}px, ${invert.top}px)`,
                        },
                        { transform: "translate(0)" },
                    ]

                    const options = {
                        duration: 300,
                        easing: "cubic-bezier(0,0,0.32,1)",
                    }

                    const animation = imgRef.animate(keyframes, options)
                })
            })
        }
    }
}
</script>

<style lang="scss">
.wrap {
    display: flex;
    flex-wrap: wrap;
    .img-wrap {
        width: 25%;
        padding: 10px;
        overflow: hidden;
        box-sizing: border-box;
        img {
            width: 100%;
            border: 1px solid #dddddd;
            border-radius: 16px;
        }
    }
}
</style>