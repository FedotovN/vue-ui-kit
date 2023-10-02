<script setup lang="ts">
import BaseTabs from "./components/Tabs/BaseTabs/BaseTabs.vue";
import BaseTabsItem from "./components/tabs/BaseTabs/BaseTabItem/BaseTabItem.vue";
import BaseAccordion from "./components/Accordion/BaseAccordion/BaseAccordion.vue";
import BaseAccordionItem from "./components/Accordion/BaseAccordion/AccordionItem/AccordionItem.vue";
</script>
<template>
  <base-accordion width="700px">
    <template #default="{ toggleItem }">
      <base-accordion-item id="0" @toggle="toggleItem" title="Tabs">
        <div style="padding: 5px;">
          <base-tabs>
            <base-tabs-item :id="0">
              <div style="text-align: center;">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nemo? Earum eaque natus ullam saepe quidem dolore velit hic quasi, blanditiis error aperiam modi voluptatibus nemo temporibus quaerat aut possimus magnam veritatis aliquam. Quia nemo tenetur quisquam numquam id sit ipsam eius provident officia, ut reprehenderit magnam aliquam laborum dicta, facere soluta! Molestias placeat excepturi laudantium quibusdam, maiores et nihil odit? Debitis laborum ratione placeat. Nisi praesentium quam iste veritatis reprehenderit ipsa quo. Id eaque velit perspiciatis corrupti officiis similique reiciendis animi ducimus ipsum odio in, qui unde repellendus consequuntur ut nihil labore quasi vero? Repudiandae rem voluptate veritatis labore similique, excepturi sapiente earum iusto, tempora voluptas adipisci. Eaque eius tenetur mollitia architecto corporis. Dignissimos tenetur earum necessitatibus nihil ex dolorum quod nam atque quas sunt veritatis quaerat eligendi nemo magnam aperiam, id ut iure obcaecati impedit exercitationem modi. Sequi alias dolorum minus, enim repellendus nisi ad deleniti dolores. Cupiditate sint laborum quos blanditiis eius ipsa, perspiciatis vel, nobis libero dolor nam? Sapiente, maiores exercitationem ut, cum assumenda quaerat saepe beatae hic voluptates sint, perspiciatis a vel laboriosam cupiditate minus molestias id eius quam! Molestias voluptate ex deleniti obcaecati reprehenderit soluta fugiat aut, facilis officia esse totam sapiente minus quam earum, maxime quasi expedita dolorum cumque iure distinctio ad, dicta odio quos! Porro illo tempore eveniet nihil libero id culpa in rem voluptatem. Obcaecati quae adipisci nemo voluptas voluptatem reprehenderit nam fuga dicta aut atque quod eos iusto itaque, rem veritatis, eius esse culpa distinctio illo. Iure sed iste aperiam beatae, vero molestiae, autem repellendus dolorem ratione consequatur fugiat inventore incidunt a? Repellendus corrupti delectus nemo atque possimus, labore placeat cum rerum numquam laborum quas odit accusamus id esse? Esse ipsum impedit modi magni doloremque doloribus porro, aspernatur, dignissimos, assumenda nobis laborum. In, ea ad dolor porro officiis laborum autem, dolore, veniam delectus quasi et molestiae magni temporibus perspiciatis labore saepe pariatur accusantium eos cumque. Culpa, doloribus nesciunt? Tenetur error eveniet alias nesciunt saepe tempora repudiandae quaerat autem fugiat? A doloremque quo laudantium, minima provident eveniet nihil nobis? Voluptatibus quibusdam ex illo placeat quidem officiis recusandae asperiores dolor ad, exercitationem nisi velit, blanditiis culpa, repellendus animi ut praesentium eveniet neque minus impedit a doloribus maiores nulla! Saepe, aspernatur minima quo tempora, sit pariatur, ipsam ab tempore voluptatibus eius necessitatibus accusantium ex. Voluptates, enim vitae? Nobis soluta assumenda quod nostrum illum, quo qui facilis reiciendis facere doloribus eos cum? Quod quas doloremque quo rem omnis nesciunt modi animi, consectetur reiciendis, corrupti ipsum soluta dolores maxime. Sed eos suscipit recusandae iste incidunt deleniti quod ad quasi. Tenetur corrupti minus aliquam reiciendis quidem beatae earum, et cumque totam nihil corporis odit culpa! Sunt, ut iusto. Debitis repellat error aut distinctio vel! Reprehenderit doloribus numquam asperiores corporis, voluptas dicta a reiciendis alias quibusdam, itaque facilis ex? Nemo assumenda, reprehenderit veritatis facere, commodi magnam vero id dicta libero eos consectetur sed culpa, enim fugiat cumque. Accusamus nisi quis, saepe earum commodi explicabo voluptatem libero amet sunt labore itaque enim quae recusandae vel, voluptate quaerat illum.
              </div>
            </base-tabs-item>
            <base-tabs-item :id="1" title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nemo?">
              <div>
                Example 2
              </div>
            </base-tabs-item>
            <base-tabs-item :id="2" title="Lorem ipsum">
              <div>
                Example 3
              </div>
            </base-tabs-item>
            <base-tabs-item :id="3" title="Lorem">
              <div>
                Example 3
              </div>
            </base-tabs-item>
          </base-tabs>
        </div>
      </base-accordion-item>    
    </template>
  </base-accordion>
</template>
<style>
</style>
