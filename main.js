let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let metrekareBilgisi = document.getElementById('metrekare_bilgisi').value;

    let betonarmeBetonu = document.getElementById('betonarme_betonu').value = (0.380 * metrekareBilgisi);
    let betonarmeDemiri = document.getElementById('betonarme_demiri').value = (34 * metrekareBilgisi);
    let kalıp = document.getElementById('kalıp').value = (2.60 * metrekareBilgisi);
    let kalıpİskelesi = document.getElementById('kalıp_iskelesi').value = (2.80 * metrekareBilgisi);
    let işİskelesi = document.getElementById('iş_iskelesi').value = (1.43 * metrekareBilgisi);
    let tuğlaDuvar = document.getElementById('tuğla_duvar').value = (0.150 * metrekareBilgisi);
    let içSıva = document.getElementById('iç_sıva').value = (2.40 * metrekareBilgisi);
    let dışSıva = document.getElementById('dış_sıva').value = (1.30 * metrekareBilgisi);
    let tavanSıvası = document.getElementById('tavan_sıvası').value = (0.90 * metrekareBilgisi);
    let badanaİç = document.getElementById('badana_iç').value = (3.00 * metrekareBilgisi);
    let fayansSeramik = document.getElementById('fayans_seramik').value = (0.30 * metrekareBilgisi);
    let ahşapYapı = document.getElementById('ahşap_yapı').value = (0.15 * metrekareBilgisi);
    let ahşapPencere = document.getElementById('ahşap_pencere').value = (0.12 * metrekareBilgisi);
    let yağlıBoya = document.getElementById('yağlı_boya').value = (0.42 * metrekareBilgisi);
    let ahşapÇatı = document.getElementById('ahşap_çatı').value = (1.25 * metrekareBilgisi);
    let metalÖrtü = document.getElementById('metal_örtü').value = (1.33 * metrekareBilgisi);
    let mozaikDöşeme = document.getElementById('mozaik_döşeme').value = (0.90 * metrekareBilgisi);
    let cam = document.getElementById('cam').value = (0.10 * metrekareBilgisi);
})