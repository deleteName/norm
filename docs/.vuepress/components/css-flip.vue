<template>
    <div class="css-flip">
        <!-- 基础节点 -->
        <div class="wrap">
            <div v-for="item in imgList" class="img-wrap" ref="imgRef" :key="item">
                <img :src="item" />
            </div>
        </div>

        <!-- 事件按钮 -->
        <button @click="random">乱序</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgList: [
                '/test-image (1).jpg',
                '/test-image (2).jpg',
                '/test-image (3).jpg',
                '/test-image (4).jpg',
                '/test-image (5).jpg',
                '/test-image (6).jpg',
                '/test-image (7).jpg',
                '/test-image (8).jpg',
            ]
        }
    },
    methods: {
        getBounding() {
            return this.imgRef.map(node => {
                let rect = node.getBoundingClientRect()
                let { top, left } = rect
                return { top, left }
            })
        },
        random() {
            this.imgList.sort(() => Math.random() - 0.5)
        }
    },
    mounted () {
        // 保存图片节点
        this.imgRef = this.$refs.imgRef
    },
    watch: {
        imgList() {
            let prevPositions = this.getBounding()
            this.$nextTick(() => {
                let currentPositions = this.getBounding()

                this.imgRef.forEach((imgRef, imgIndex) => {
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