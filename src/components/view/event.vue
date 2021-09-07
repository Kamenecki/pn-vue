<template>
  <div class="Seznam">

    <div id="filter">
      <p>Izberi katergorijo</p>
      <button class="btn active" onclick="filterSelection('all')">VSE</button><br>
      <button class=" btn " onclick="filterSelection('ez')">PREPROSTE</button><br>
      <button class=" btn " onclick="filterSelection('hard')">ZAHTEVNE</button><br>
      <button class="btn" onclick="filterSelection('adult')">ZA ODRASLE</button><br>
    </div>

    <div class="igra1 ez filterDiv show">
      <p>Za najmlajše</p>
      <img src="@/assets/Slike/otroci.jpg" alt="otroci" style="float:top; width:300px; height:300px;
        margin: 20px; border-radius: 10px;">
      <br>
      <p>Paket vsebuje igre, primerne za otroke od 2 do 10 let,
        zraven spada tudi animator za popestritev najmlajšim!</p>
      <button class="btncart" onclick="cartStorageAdd('igra1')">Dodaj v košaro</button><br>

    </div>

    <div class="igra2 ez filterDiv show">
      <p>Za vso družino</p>
      <img src="@/assets/Slike/druzina.jpg" alt="družina" style="float:top; width:300px; height:300px;
        margin: 20px; border-radius: 10px;">
      <br>
      <p>Zabava za vso družino, če pa vam primankuje družinskih članov,
        se podo naši zaposleni z veseljem pridružili!</p>
      <button class="btncart" onclick="cartStorageAdd('igra2')">Dodaj v košaro</button><br>
    </div>

    <div class="igra3 hard filterDiv show">
      <p>"Roleplay"</p>
      <img src="@/assets/Slike/wizard.jpg" alt="čarodej" style="float:top; width:300px; height:300px;
        margin: 20px; border-radius: 10px;">
      <br>
      <p>Popelji prijatelje v svet fantazije in si izdelajte svojo zgodbo!
        na voljo mnogo različnih tem, vse od zgodovine do SCI-FI</p>
      <button class="btncart" onclick="cartStorageAdd('igra3')">Dodaj v košaro</button><br>
    </div>

    <div class="igra4 hard adult filterDiv show">
      <p>Kazino igre</p>
      <img src="@/assets/Slike/casino.jpg" alt="kazino" style="float:top; width:300px; height:300px;
        margin: 20px; border-radius: 10px;">
      <br>
      <p>A imaš srečo? Izzovi kolege na igralni mizo, naš delaer pa bo posrbel
        za čisto igro brez umazanih trikov!</p>
      <button class="btncart" onclick="cartStorageAdd('igra4')">Dodaj v košaro</button><br>
    </div>

    <div class="igra5 hard filterDiv show">
      <p>karte</p>
      <img src="@/assets/Slike/cards.jpg" alt="karte" style="float:top; width:300px; height:300px;
        margin: 20px; border-radius: 10px;">
      <br>
      <p>Kvartopirci vseh starosti pripravljeni! Ustvari turnir po svoji želji, sodnik pa bo poskrbel da ne bo dobenih
        "mi smo se drugače špilali"</p>
      <button class="btncart" onclick="cartStorageAdd('igra5')">Dodaj v košaro</button><br>
    </div>

    <div class="igra6 adult filterDiv show">
      <p>Party igre 18+</p>
      <img src="@/assets/Slike/alcohol.jpg" alt="pijača" style="float:top; width:300px; height:300px;
        margin: 20px; border-radius: 10px;">
      <br>
      <p>Načrtuješ žurko? Mi vam pripravimo asortiman iger ki vlkjučujejo razne
        alkoholne pijače, za vse razrede teže!  </p>
      <button class="btncart" onclick="cartStorageAdd('igra6')">Dodaj v košaro</button><br>
      <br>
    </div>

  </div>
</template>

<script>
export default {
  name: "event"
}
</script>

<style scoped>

</style>