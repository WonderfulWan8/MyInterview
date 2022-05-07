<template>
    <div>
        <p>{{name}}</p>
        <!-- <CostomVModel v-model="name"/>
        ================================= -->
        <!-- <NextTick/> -->
        <!-- =================================
        <SlotDemo :url="website.url">
            {{website.title}}
        </SlotDemo> -->
        =================================
        <ScopedSlot :url="website.url">
            <template v-slot="slotProps">
                {{slotProps.slotData.title}}
            </template>
        </ScopedSlot>
        <!-- =================================
        <NamedSlot>
            <template v-slot:header>
                <h1>将插入 header slot 中</h1>
            </template>
            <p>将插入 main slot 中，既未命名的slot</p>
            <template v-slot:footer>
                <h2>将插入footer slot中</h2>
            </template>
        </NamedSlot> -->
        <!-- ================================= -->
        <!-- 动态组件，:is="组件名字" -->
        <!-- <component :is="NextTickName"/>
        <div v-for="(value, key ) in newsData" :key="key">
            <component :is="value.type"/>
        </div> -->
        <!-- ================================= -->
        <!-- <AsyncDemo/> -->
        <!-- <KeepAliveDemo/> -->

        <!-- <MixinDemo/>     -->


    </div>
</template>
<script>
import CostomVModel from './1_.CostomVModel.vue'
import NextTick from './2_NextTick.vue'
import SlotDemo from './3_slot.vue'
import ScopedSlot from './3_scopedSlot.vue'
import NamedSlot from './3_NamedSlot.vue'
import AsyncDemo from './4_async.vue'
import KeepAliveDemo from './5_KeepAliveDemo.vue'
import MixinDemo from './6_MixinDemo.vue'

export default {
    data(){
        return {
            name: '双越',
            website:{
                url: 'http://imooc.com/',
                title: 'imooc',
                subTitle: '程序员的梦工厂'
            },
            NextTickName: 'NextTick',
            newsData: {
                1:{
                    type:'CostomVModel',
                },
                2:{
                    type: 'NextTick',
                },
                3:{
                    type: 'ScopedSlot',
                }
            },
            
        }
    },
    components:{
        CostomVModel,
        NextTick,
        SlotDemo,
        ScopedSlot,
        NamedSlot,
        AsyncDemo,
        KeepAliveDemo,
        MixinDemo,
    }    
}
</script>
<style scoped>

</style>