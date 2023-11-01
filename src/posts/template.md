---
title: Template
description: A post about how to make templates using simple algorithms
date: '2023-10-29'
categories:
  - template
  - algorithms
  - example
published: true
---

<script lang="ts">
  	import { CodeBlock } from '@skeletonlabs/skeleton';

    function fizzBuzz() {
      for(let i = 1; i<50;i++ ) {
        if(i % 5 === 0 && i % 3 === 0) {
          console.log('fizzBuzz')
        } else if(i % 5 === 0) {
          console.log('fizz')
        } else if( i % 3 ===0) {
          console.log('buzz')
        } else {
          console.log(i)
        }
      }
    }
    fizzBuzz();

    let counter = 1;
    let answer = 'starting'

    $: {
      if (counter % 5 === 0 && counter % 3 === 0) {
        answer = 'fizzbuzz'
      } else if(counter % 5 === 0) {
         answer = 'fizz'
      } else if(counter % 3 === 0) {
        answer = 'buzz'
      } else {
        answer = counter
      }
    }

</script>
  ## EXAMPLE TEMPLATE

  ### Example: Visualize as UI cards

  <div class="code-wrap-iterator">
  {#each Array(25) as _, i (i)}

    {#if (i % 5 === 0 && i % 3 === 0 ) }
      <p class="card variant-filled-primary p-1">FIZZBUZZ: {i} </p>
    {:else if i % 5 === 0}
      <p class="card variant-filled-secondary p-1">FIZZ: {i} </p>
    {:else if i % 3 === 0}
      <p class="card variant-filled-tertiary p-1">BUZZ: {i} </p>
    {:else}
      <p class="card variant-filled-surface p-1">NOT {i} </p>
    {/if}

  {/each}
  </div>

    ### Example: Inc the counter
 <div class="inline" on:click={() => counter++}><button class="btn variant-ghost-primary">INC COUNTER</button></div>

  {answer}

  <CodeBlock language="js" code={`
    for(let i = 1; i<${counter};i++ ) {
        <answer> i = ${counter} </answer>
        if(i % 5 === 0 && i % 3 === 0) {
         console.log('fizzBuzz')
        } else if(i % 5 === 0) {
         console.log('fizz')
        } else if( i % 3 === 0) {
          console.log('buzz')
        } else {
          console.log(i)
        }
      }`} />


  ### Example: Visualize loops 

  <div class="code-wrap-iterator">
  {#each Array(4) as _, i (i)}
        <CodeBlock language="js" code={`
        for(let i = 1; i<${i};i++ ) {
             <answer> i = ${i} </answer>
            if(i % 5 === 0 && i % 3 === 0) {
              console.log('fizzBuzz')
            } else if(i % 5 === 0) {
              console.log('fizz')
            } else if( i % 3 ===0) {
              console.log('buzz')
            } else {
              console.log(i)
            }
          }`} />
  {/each}
  </div>

