const DEFAULT_SOURCES = [{"id":"zaxid","name":"ZAXID.NET","category":"Медіа","type":"rss","url":"https://zaxid.net/","feedUrl":"","enabled":true},{"id":"nta","name":"NTA","category":"Медіа","type":"rss","url":"https://nta.ua/","feedUrl":"","enabled":true},{"id":"city","name":"Львівська міська рада","category":"Львівщина","type":"rss","url":"https://city-adm.lviv.ua/news/","feedUrl":"","enabled":true},{"id":"lvivmedia","name":"Львів Медіа","category":"Медіа","type":"rss","url":"https://lviv.media/","feedUrl":"","enabled":true},{"id":"suspilne","name":"Суспільне","category":"Медіа","type":"rss","url":"https://suspilne.media/","feedUrl":"","enabled":true},{"id":"tg-lvivych_news","name":"Львівич","category":"Telegram","type":"telegram","handle":"lvivych_news","url":"https://t.me/lvivych_news","enabled":true},{"id":"tg-lviv_lmbrg","name":"LEMBERG","category":"Telegram","type":"telegram","handle":"lviv_lmbrg","url":"https://t.me/lviv_lmbrg","enabled":true},{"id":"tg-lv1256","name":"Так люблю той Львів","category":"Telegram","type":"telegram","handle":"Lv1256","url":"https://t.me/Lv1256","enabled":true},{"id":"tg-kozytskyy_maksym_official","name":"Максим Козицький","category":"Telegram","type":"telegram","handle":"kozytskyy_maksym_official","url":"https://t.me/kozytskyy_maksym_official","enabled":true},{"id":"tg-people_of_action","name":"People of Action","category":"Telegram","type":"telegram","handle":"people_of_action","url":"https://t.me/people_of_action","enabled":true},{"id":"tg-v_zelenskiy_official","name":"Володимир Зеленський","category":"Telegram","type":"telegram","handle":"V_Zelenskiy_official","url":"https://t.me/V_Zelenskiy_official","enabled":true},{"id":"tg-oleksandrkoval_rv","name":"Олександр Коваль","category":"Telegram","type":"telegram","handle":"oleksandrkoval_rv","url":"https://t.me/oleksandrkoval_rv","enabled":true},{"id":"tg-zinkevich_igor","name":"Ігор Зінкевич","category":"Telegram","type":"telegram","handle":"zinkevich_igor","url":"https://t.me/zinkevich_igor","enabled":true},{"id":"tg-lviv_adm","name":"Львівська міська рада","category":"Telegram","type":"telegram","handle":"lviv_adm","url":"https://t.me/lviv_adm","enabled":true},{"id":"tg-centercounteringdisinformation","name":"Центр протидії дезінформації","category":"Telegram","type":"telegram","handle":"CenterCounteringDisinformation","url":"https://t.me/CenterCounteringDisinformation","enabled":true},{"id":"tg-dsns_lviv","name":"ДСНС Львівщини","category":"Telegram","type":"telegram","handle":"dsns_lviv","url":"https://t.me/dsns_lviv","enabled":true},{"id":"tg-lviv_region_poluce","name":"Поліція Львівщини","category":"Telegram","type":"telegram","handle":"lviv_region_poluce","url":"https://t.me/lviv_region_poluce","enabled":true},{"id":"tg-dsns_ternopil","name":"ДСНС Тернопільщини","category":"Telegram","type":"telegram","handle":"DSNS_TERNOPIL","url":"https://t.me/DSNS_TERNOPIL","enabled":true},{"id":"tg-lvivpatrolpolice","name":"Патрульна поліція Львівщини","category":"Telegram","type":"telegram","handle":"lvivpatrolpolice","url":"https://t.me/lvivpatrolpolice","enabled":true},{"id":"tg-pgo_gov_ua","name":"Офіс Генерального прокурора","category":"Telegram","type":"telegram","handle":"pgo_gov_ua","url":"https://t.me/pgo_gov_ua","enabled":true},{"id":"tg-dsns_rivne","name":"ДСНС Рівненщини","category":"Telegram","type":"telegram","handle":"dsns_rivne","url":"https://t.me/dsns_rivne","enabled":true},{"id":"tg-lvivoblprok","name":"Львівська обласна прокуратура","category":"Telegram","type":"telegram","handle":"lvivoblprok","url":"https://t.me/lvivoblprok","enabled":true},{"id":"fb-dsns","name":"ДСНС Львівщини","category":"Facebook","type":"link","url":"https://www.facebook.com/LVIVDSNS","enabled":true},{"id":"fb-prok-lviv","name":"Львівська обласна прокуратура","category":"Facebook","type":"link","url":"https://www.facebook.com/lviv.gp.gov.ua?locale=uk_UA","enabled":true},{"id":"fb-police-lviv","name":"Поліція Львівської області","category":"Facebook","type":"link","url":"https://www.facebook.com/police.lviv.region?locale=uk_UA","enabled":true},{"id":"fb-police-zak","name":"Поліція Закарпаття","category":"Facebook","type":"link","url":"https://www.facebook.com/UA.ZakarpattyaPolice?locale=uk_UA","enabled":true},{"id":"fb-prok-zak","name":"Закарпатська обласна прокуратура","category":"Facebook","type":"link","url":"https://www.facebook.com/zakprokuratura?locale=uk_UA","enabled":true},{"id":"fb-100070918698861","name":"Facebook · сторінка 100070918698861","category":"Facebook","type":"link","url":"https://www.facebook.com/profile.php?id=100070918698861&locale=uk_UA","enabled":true},{"id":"fb-police-rivne","name":"Поліція Рівненщини","category":"Facebook","type":"link","url":"https://www.facebook.com/police.in.Rivne.region","enabled":true},{"id":"fb-police-tern","name":"Поліція Тернопільщини","category":"Facebook","type":"link","url":"https://www.facebook.com/gynp.ternopil","enabled":true},{"id":"fb-100064561967246","name":"Facebook · сторінка 100064561967246","category":"Facebook","type":"link","url":"https://www.facebook.com/profile.php?id=100064561967246","enabled":true},{"id":"fb-customs","name":"Львівська митниця","category":"Facebook","type":"link","url":"https://www.facebook.com/LVcustomsUA","enabled":true}];

const json = (data, status=200) => new Response(JSON.stringify(data), {
  status, headers: {"content-type":"application/json; charset=utf-8","cache-control":"no-store"}
});
const clean = s => (s||"").replace(/<script[\s\S]*?<\/script>/gi," ").replace(/<style[\s\S]*?<\/style>/gi," ").replace(/<[^>]+>/g," ").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/\s+/g," ").trim();
const nowISO = () => new Date().toISOString();

async function getText(url) {
  const r = await fetch(url, {
    headers: {"user-agent":"Mozilla/5.0 (compatible; NewsDesk/3.0; public-source-monitor)","accept":"text/html,application/rss+xml,application/atom+xml,application/xml;q=0.9,*/*;q=0.8"},
    cf: {cacheTtl:0, cacheEverything:false},
    signal: AbortSignal.timeout(15000)
  });
  if (!r.ok) throw new Error("HTTP " + r.status);
  return r.text();
}
function decodeXml(s="") {
  return s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,"$1")
    .replace(/&#x([\da-f]+);/gi,(_,n)=>String.fromCodePoint(parseInt(n,16)))
    .replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(Number(n)))
    .replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/&quot;/gi,'"')
    .replace(/&apos;/gi,"'").replace(/&#39;/g,"'").replace(/&lt;/gi,"<").replace(/&gt;/gi,">");
}
function xmlValue(block, tag) {
  const re = new RegExp("<(?:[\\w.-]+:)?"+tag+"(?:\\s[^>]*)?>([\\s\\S]*?)<\\/(?:[\\w.-]+:)?"+tag+"\\s*>","i");
  const m=block.match(re);
  if (m) return decodeXml(m[1].replace(/<[^>]*>/g," ").trim());
  return "";
}
function parseTelegram(html, source) {
  const found = [];
  const re = /<div[^>]+data-post=["']([^"']+)["'][\s\S]*?(?=<div[^>]+data-post=|$)/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const block=m[0], post=m[1];
    if (!post.toLowerCase().startsWith(source.handle.toLowerCase() + "/")) continue;
    const tm=block.match(/class=["'][^"']*tgme_widget_message_text[^"']*["'][^>]*>([\s\S]*?)<\/div>/i);
    const title=clean(decodeXml(tm?.[1]||""));
    const publishedAt=block.match(/<time[^>]+datetime=["']([^"']+)["']/i)?.[1]||nowISO();
    if (title) found.push({guid:post,title,url:"https://t.me/"+post,publishedAt,summary:title.slice(0,350)});
  }
  return found;
}
async function fetchTelegramItems(source) {
  const all=new Map();
  let before=null;
  for (let page=0; page<5; page++) {
    const url="https://t.me/s/"+encodeURIComponent(source.handle)+(before?"?before="+encodeURIComponent(before):"");
    const html=await getText(url);
    const batch=parseTelegram(html,source);
    for (const item of batch) all.set(item.guid,item);
    const ids=[...html.matchAll(/data-post=["'][^/"']+\/(\d+)["']/gi)].map(x=>Number(x[1])).filter(Number.isFinite);
    if (!ids.length || batch.length===0) break;
    const oldest=Math.min(...ids);
    if (!oldest || oldest===before) break;
    before=oldest;
  }
  return [...all.values()];
}
function parseRss(xml, source) {
  const out=[];
  const blocks=[...xml.matchAll(/<(?:[\w.-]+:)?(item|entry)\b[\s\S]*?<\/(?:[\w.-]+:)?\1\s*>/gi)];
  for (const m of blocks) {
    const b=m[0];
    const title=xmlValue(b,"title");
    let link=xmlValue(b,"link");
    if (!link) link=b.match(/<(?:[\w.-]+:)?link[^>]+href=["']([^"']+)["']/i)?.[1]||"";
    const guid=xmlValue(b,"guid")||xmlValue(b,"id")||link||title;
    const raw=xmlValue(b,"pubDate")||xmlValue(b,"published")||xmlValue(b,"updated")||xmlValue(b,"date");
    const parsed=raw?new Date(raw):null;
    const publishedAt=parsed&&!Number.isNaN(parsed.getTime())?parsed.toISOString():nowISO();
    const summary=xmlValue(b,"description")||xmlValue(b,"summary")||xmlValue(b,"content");
    if (title&&link) {
      try { out.push({guid,title,url:new URL(link,source.url).href,publishedAt,summary:summary.slice(0,350)}); } catch {}
    }
  }
  return out;
}
function rssCandidates(source, html="") {
  const urls=[];
  const links=[...html.matchAll(/<link\b([^>]+)>/gi)];
  for (const [,attrs] of links) {
    const type=attrs.match(/type=["']([^"']+)["']/i)?.[1]||"";
    const href=attrs.match(/href=["']([^"']+)["']/i)?.[1];
    if (href && (/rss|atom|xml/i.test(type)||/rss|feed|atom/i.test(href))) {
      try { urls.push(new URL(href,source.url).href); } catch {}
    }
  }
  const base=new URL(source.url);
  for (const p of ["/feed","/rss","/rss.xml","/feed.xml","/atom.xml"]) urls.push(new URL(p,base.origin).href);
  const domain=base.hostname.replace(/^www\./,"");
  urls.push("https://news.google.com/rss/search?q="+encodeURIComponent("site:"+domain)+"&hl=uk&gl=UA&ceid=UA:uk");
  return [...new Set(urls)];
}
async function ensureSources(env) {
  const count=await env.DB.prepare("SELECT COUNT(*) n FROM sources").first();
  if (count.n) return;
  const stmt=env.DB.prepare("INSERT OR IGNORE INTO sources(id,name,category,type,url,handle,feed_url,enabled) VALUES(?,?,?,?,?,?,?,?)");
  for (const s of DEFAULT_SOURCES) await stmt.bind(s.id,s.name,s.category,s.type,s.url,s.handle||null,s.feedUrl||null,s.enabled?1:0).run();
}
async function setting(env,key,value) {
  await env.DB.prepare("INSERT OR REPLACE INTO settings(key,value) VALUES(?,?)").bind(key,String(value)).run();
}
async function suppressedIds(env) {
  const row=await env.DB.prepare("SELECT value FROM settings WHERE key='deleted_items'").first();
  try { return new Set(JSON.parse(row?.value||"[]")); } catch { return new Set(); }
}
async function rememberDeleted(env,ids) {
  if (!ids.length) return;
  const all=await suppressedIds(env);
  for (const id of ids) all.add(id);
  await setting(env,"deleted_items",JSON.stringify([...all].slice(-20000)));
}
async function recordItems(env,source,items) {
  const baseline=await env.DB.prepare("SELECT value FROM settings WHERE key=?").bind("baseline:"+source.id).first();
  const suppressed=await suppressedIds(env);
  let added=0;
  for (const it of items) {
    const itemId=source.id+":"+it.guid;
    if (suppressed.has(itemId)) continue;
    const r=await env.DB.prepare(
      "INSERT OR IGNORE INTO items(id,source_id,source_name,category,title,url,summary,published_at,created_at) VALUES(?,?,?,?,?,?,?,?,?)"
    ).bind(itemId,source.id,source.name,source.category,it.title,it.url,it.summary,it.publishedAt,nowISO()).run();
    if (baseline && r.meta.changes) added++;
  }
  if (!baseline) await setting(env,"baseline:"+source.id,nowISO());
  return added;
}
async function checkSource(env,s) {
  const checkedAt=nowISO();
  try {
    let items=[];
    if (s.type==="telegram") {
      if (!s.handle) throw new Error("Не вказано Telegram username");
      items=await fetchTelegramItems(s);
    } else if (s.type==="rss") {
      let feed=s.feed_url;
      let html="";
      if (!feed) html=await getText(s.url);
      const candidates=feed?[feed]:rssCandidates(s,html);
      let lastError="RSS не знайдено";
      for (const candidate of candidates) {
        try {
          const xml=await getText(candidate);
          const parsed=parseRss(xml,s);
          if (!parsed.length && !/<(?:[\\w.-]+:)?(?:rss|feed|RDF)\\b/i.test(xml)) {
            throw new Error("Відповідь не схожа на коректну RSS/Atom-стрічку");
          }
          items=parsed; feed=candidate; break;
        } catch(e) { lastError=String(e.message||e); }
      }
      if (!feed || !items.length) throw new Error(lastError);
      await env.DB.prepare("UPDATE sources SET feed_url=? WHERE id=?").bind(feed,s.id).run();
    } else {
      await env.DB.prepare("UPDATE sources SET status='link_only',status_message='Лише швидке посилання',last_checked_at=? WHERE id=?").bind(checkedAt,s.id).run();
      return {checked:false,ok:true};
    }
    const added=await recordItems(env,s,items);
    await env.DB.prepare("UPDATE sources SET status='ok',status_message=?,last_checked_at=? WHERE id=?").bind("Отримано: "+items.length+" · нових: "+added,checkedAt,s.id).run();
    return {checked:true,ok:true};
  } catch(e) {
    await env.DB.prepare("UPDATE sources SET status='error',status_message=?,last_checked_at=? WHERE id=?")
      .bind(String(e.message||e).slice(0,180),checkedAt,s.id).run();
    return {checked:true,ok:false};
  }
}
async function poll(env) {
  await ensureSources(env);
  const started=nowISO();
  await setting(env,"last_check_started_at",started);
  const {results}=await env.DB.prepare("SELECT * FROM sources WHERE enabled=1 AND type IN ('telegram','rss') ORDER BY id").all();
  let checked=0, failed=0;
  for (let i=0;i<results.length;i+=4) {
    const batch=await Promise.all(results.slice(i,i+4).map(s=>checkSource(env,s)));
    for (const result of batch) {
      if (result.checked) checked++;
      if (!result.ok) failed++;
    }
  }
  const finished=nowISO();
  await setting(env,"last_check_at",finished);
  await setting(env,"last_check_count",checked);
  await setting(env,"last_check_failed",failed);
}
async function readSettings(env) {
  const {results}=await env.DB.prepare("SELECT key,value FROM settings WHERE key IN ('last_check_started_at','last_check_at','last_check_count','last_check_failed')").all();
  return Object.fromEntries(results.map(x=>[x.key,x.value]));
}
async function parseBody(request) {
  try { return await request.json(); } catch { return null; }
}
function validSource(b) {
  return b && typeof b.name==="string" && b.name.trim() && typeof b.url==="string" && /^https?:\/\//i.test(b.url)
    && typeof b.category==="string" && b.category.trim() && ["rss","telegram","link"].includes(b.type);
}
export default {
  async fetch(request,env,ctx) {
    const url=new URL(request.url);
    if (url.pathname.startsWith("/api/")) {
      await ensureSources(env);
      if (url.pathname==="/api/health") return json({ok:true,now:nowISO()});
      if (url.pathname==="/api/state") {
        const [sources,items,monitor]=await Promise.all([
          env.DB.prepare("SELECT * FROM sources ORDER BY CASE category WHEN 'Telegram' THEN 1 WHEN 'Медіа' THEN 2 ELSE 3 END,name").all(),
          env.DB.prepare("SELECT * FROM items ORDER BY created_at DESC LIMIT 1000").all(),
          readSettings(env)
        ]);
        return json({sources:sources.results,items:items.results,monitor,intervalSeconds:60});
      }
      if (url.pathname==="/api/check"&&request.method==="POST") {
        ctx.waitUntil(poll(env));
        return json({ok:true,started:true},202);
      }
      if (url.pathname==="/api/items/mark-all-read"&&request.method==="POST") {
        const r=await env.DB.prepare("UPDATE items SET is_read=1 WHERE is_read=0").run();
        return json({ok:true,changed:r.meta.changes||0});
      }
      if (url.pathname==="/api/items/delete-read"&&request.method==="DELETE") {
        const {results}=await env.DB.prepare("SELECT id FROM items WHERE is_read=1 AND is_saved=0").all();
        await rememberDeleted(env,results.map(x=>x.id));
        const r=await env.DB.prepare("DELETE FROM items WHERE is_read=1 AND is_saved=0").run();
        return json({ok:true,deleted:r.meta.changes||0});
      }
      const item=url.pathname.match(/^\/api\/items\/([^/]+)(?:\/(read|save))?$/);
      if (item) {
        const id=decodeURIComponent(item[1]);
        if (request.method==="DELETE"&&!item[2]) {
          await rememberDeleted(env,[id]);
          await env.DB.prepare("DELETE FROM items WHERE id=?").bind(id).run();
          return json({ok:true});
        }
        if (request.method==="POST"&&item[2]) {
          if (item[2]==="read") await env.DB.prepare("UPDATE items SET is_read=1 WHERE id=?").bind(id).run();
          else await env.DB.prepare("UPDATE items SET is_saved=CASE WHEN is_saved=1 THEN 0 ELSE 1 END WHERE id=?").bind(id).run();
          return json({ok:true});
        }
      }
      const source=url.pathname.match(/^\/api\/sources\/([^/]+)$/);
      if (source) {
        const id=decodeURIComponent(source[1]);
        if (request.method==="DELETE") {
          await env.DB.prepare("DELETE FROM sources WHERE id=?").bind(id).run();
          return json({ok:true});
        }
        if (request.method==="PUT"||request.method==="POST") {
          const b=await parseBody(request);
          if (!validSource(b)) return json({error:"Перевір назву, URL, категорію та тип джерела"},400);
          const handle=(b.handle||"").trim().replace(/^@/,"")||null;
          const feed=(b.feedUrl||"").trim()||null;
          await env.DB.prepare("UPDATE sources SET name=?,category=?,type=?,url=?,handle=?,feed_url=?,enabled=? WHERE id=?")
            .bind(b.name.trim(),b.category.trim(),b.type,b.url.trim(),handle,feed,b.enabled===false?0:1,id).run();
          return json({ok:true});
        }
      }
      if (url.pathname==="/api/sources"&&request.method==="POST") {
        const b=await parseBody(request);
        if (!validSource(b)) return json({error:"Перевір назву, URL, категорію та тип джерела"},400);
        const id="custom-"+crypto.randomUUID();
        const handle=(b.handle||"").trim().replace(/^@/,"")||null;
        await env.DB.prepare("INSERT INTO sources(id,name,category,type,url,handle,feed_url,enabled,status,status_message) VALUES(?,?,?,?,?,?,?,?,?,?)")
          .bind(id,b.name.trim(),b.category.trim(),b.type,b.url.trim(),handle,(b.feedUrl||"").trim()||null,b.enabled===false?0:1,"pending","Очікує перевірки").run();
        return json({ok:true,id},201);
      }
      return json({error:"Not found"},404);
    }
    return env.ASSETS.fetch(request);
  },
  async scheduled(event,env,ctx) { ctx.waitUntil(poll(env)); }
};
