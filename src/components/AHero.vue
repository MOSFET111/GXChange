<script setup>
</script>

<template>
    <h1 class="text-6xl sm:text-8xl max-[501px]:text-5xl text-green-500 pb-5 pl-7 pt-8">
        Our Createor
    </h1>

    <p class="text-4xl absolute top-1/2 right-10 transform -translate-y-1/2 pr-8 h-30 www vertical-text">
        Mostafa Hassan (MOSFET)
    </p>

    <p class="text-xl pt-10 max-[769px]:pt-65 pl-7">
        A Brilliant webDevloper, with busniss experties and a Greate Capacity for
         <span class="text-green-400">Gaming</span> </p>
    
    <div class="flex flex-row">
        <h1 class=" sm:text-8xl text-6xl md:right-15 sm:text-5xl pl-7 vertical-textl text-green-500 pb-5  mt-[30rem] max-[640px]:left-15 max-[769px]:pt-60">
            Our Philosphy
        </h1>
    
        <p class="text-xl pt-30 pl-7">
            We believe gaming thrives on <span class="text-green-400">fresh</span> adventures and shared joy. Our <span class="text-green-400">marketplace</span> empowers players to <span class="text-green-400">exchange</span> accounts seamlessly, fostering a community where <span class="text-green-400">trust</span> and excitement fuel every swap. Here, it’s not just about unlocking new worlds—it’s about connecting passionate players, sparking creativity, and keeping the fun alive. Because <span class="text-green-400">gaming</span> is best when it’s a collective thrill, not a solo grind.    
        </p>
    </div>
    <div class='h-40'></div>
    <ul>
    <h1 class="text-2xl sm:text-8xl max-[501px]:text-5xl text-green-500 pb-5 pl-7 pt-8">
        Our Team
    </h1>
    <li class="flex flex-row">
        <p class="text-3xl">Team Leader, FullStack: &nbsp;</p>
        <p class="text-3xl"><span class="text-green-400">Mostafa Hassan</span> (MOSFET)</p>
    </li>
    <li class="flex flex-row">
        <p class="text-2xl">Staff: &nbsp;</p>
        <p class="text-2xl"><span class="text-green-400">Mahmoud Mohamed</span> </p>
    </li>
    <li class="flex flex-row">
        <p class="text-2xl">Staff: &nbsp;</p>
        <p class="text-2xl"><span class="text-green-400">Eman</span></p>
    </li>
    <li class="flex flex-row">
        <p class="text-2xl">Staff: &nbsp;</p>
        <p class="text-2xl"><span class="text-green-400">Karim Yasser</span></p>
    </li>
</ul>

</template>


<style scoped>
.vertical-text {
  @apply [writing-mode:vertical-rl];
  margin-top: -20rem;
}
.vertical-textl {
  @apply [writing-mode:vertical-lr];
  margin-top: -10rem;
  transform: rotate(180deg);
  margin-top: 2rem;
}
*{
    line-height: 2rem;
}
p,h1{
    cursor: default;
    z-index: 0;
}
.flex{
    margin-top: 3rem;
}
.www{
    margin-top: -15rem;
}
</style>
