<script context="module">

  export const prerender = true;

  import Image from "svelte-image";
  // slider
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import { Pagination } from "swiper";
  import "swiper/css";
  import "swiper/css/pagination";

  // content
  import releases from "./content/releases.json";
  import awards from "./content/awards.json";
  import projects from "./content/projects.json";
  import socials from "./content/socials.json";
  // components
  import ListSection from "./lib/ListSection.svelte";

  // icons
  import DeviceGamepad from "tabler-icons-svelte/icons/DeviceGamepad.svelte";
  import WritingSign from "tabler-icons-svelte/icons/WritingSign.svelte";
  import Trophy from "tabler-icons-svelte/icons/Trophy.svelte";
  import Link from "tabler-icons-svelte/icons/Link.svelte";
  import HandRock from "tabler-icons-svelte/icons/HandRock.svelte";
  import Send from "tabler-icons-svelte/icons/Send.svelte";
  import Click from "tabler-icons-svelte/icons/Click.svelte";
  import ExternalLink from "tabler-icons-svelte/icons/ExternalLink.svelte";

  // hi
  const greetings = ["Hi", "Hey", "Heyo", "Hej", "Salut", "Gude"];
  let hi = greetings[Math.floor(Math.random() * greetings.length)];
</script>

<main>
  <div class="head-area">
    <div class="top-row">
      <h1>{hi}, I'm Louis!</h1>
      <img src="me.png" class="profile" width="100" height="100" />
    </div>
    <p>
      Welcome to my personal website. I'm currently based near Frankfurt,
      Germany and am working as a Level Designer at <a
        href="https://limbic-entertainment.com">Limbic Entertainment</a
      >. Besides my professional work, I make little games, music,
      and websites in my spare time.
    </p>
  </div>
  <ListSection name="Commercial Work" count={releases.length}>
    <DeviceGamepad size={32} slot="icon" />
    <ul>
      {#each releases as release, i}
        <li>
          <span class="year">{release.year}</span>
          <div class="title">
            {release.title}
            <a href={release.link} title="Open Link to Project" target="_blank"
              ><ExternalLink /></a
            >
          </div>
          <div class="more-info">
            {release.role} &mdash; {release.developer}{#if release.publisher}/{release.publisher}{/if}
          </div>
        </li>
      {/each}
    </ul>
  </ListSection>
  <ListSection name="Personal" count={projects.length}>
    <HandRock size={32} slot="icon" />
    <Swiper
      class="slider"
      slidesPerView={2}
      grabCursor={true}
      spaceBetween={20}
      autoHeight={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        750: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }}
      pagination={{ clickable: true }}
      modules={[Pagination]}
    >
      {#each projects as project, i}
        <SwiperSlide>
          <div
            class="slide-prev-image"
            style="background-image: url({project.image})"
          />
          <div class="slide-info">
            <h3>
              {project.title}
              {#if project.link}<a
                  href={project.link}
                  title="Open Link to Project"
                  target="_blank"
                  ><ExternalLink />
                  {#if project.linktitle}{project.linktitle}{:else}Website{/if}</a
                >{/if}
            </h3>
            <span class="year">{project.year}</span>
            {#if project.description}
            <p>{project.description}</p>
            {/if}
          </div></SwiperSlide
        >
      {/each}
    </Swiper>
  </ListSection>
  <ListSection name="Awards">
    <Trophy size={32} slot="icon" />
    <ul>
      {#each awards as award, i}
        <li>
          <span class="year">{award.year}</span>
          <div class="title">
            {award.title}
          </div>
          <div class="more-info">
            {award.description}
          </div>
        </li>
      {/each}
    </ul>
  </ListSection>
  <ListSection name="Academia">
    <WritingSign size={32} slot="icon" />
    <ul>
      <li>
        <span class="year">2021</span>
        <div class="title">Bachelor of Arts, Animation & Game</div>
        <div class="more-info">Darmstadt University of Applied Sciences</div>
        <div class="more-info">
          <div class="sub-list">
            Research: <i
              >"Dialogue Interfaces in Video Games Through the Lens of Immersion
              and Player Identification"</i
            >
          </div>
          <div class="sub-list">
            Thesis: <i
              >"Improving Tonal Consistency in Cooperative Puzzle-Platforming
              Games Through Dynamic Dialogue Systems"</i
            >
          </div>
        </div>
      </li>
    </ul>
  </ListSection>
</main>
<div class="colored-wrapper">
  <main>
    <ListSection name="Contact">
      <Send size={32} slot="icon" />
      <p>
        There are several ways to contact me. Easiest is to use my email
        address, which is this <i>my first name @ this domain</i>. You can dm me on most social media sites as well.
      </p>
    </ListSection>
    <ListSection name="Social Media">
      <Click size={32} slot="icon" />
      <ul class="social-list">
        {#each socials as social, i}
          <li><a href={social.url}>{social.display}</a></li>
        {/each}
      </ul>
    </ListSection>
  </main>
</div>
