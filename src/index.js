const DEFAULT_SOURCES = [{"id": "zaxid", "name": "ZAXID.NET", "category": "Медіа", "type": "rss", "url": "https://zaxid.net/", "feedUrl": "", "enabled": true}, {"id": "nta", "name": "NTA", "category": "Медіа", "type": "rss", "url": "https://nta.ua/", "feedUrl": "", "enabled": true}, {"id": "city", "name": "Львівська міська рада", "category": "Львівщина", "type": "rss", "url": "https://city-adm.lviv.ua/news/", "feedUrl": "", "enabled": true}, {"id": "lvivmedia", "name": "Львів Медіа", "category": "Медіа", "type": "rss", "url": "https://lviv.media/", "feedUrl": "", "enabled": true}, {"id": "suspilne", "name": "Суспільне", "category": "Медіа", "type": "rss", "url": "https://suspilne.media/", "feedUrl": "", "enabled": true}, {"id": "tg-lvivych_news", "name": "Львівич", "category": "Telegram", "type": "telegram", "handle": "lvivych_news", "url": "https://t.me/lvivych_news", "enabled": true}, {"id": "tg-lviv_lmbrg", "name": "LEMBERG", "category": "Telegram", "type": "telegram", "handle": "lviv_lmbrg", "url": "https://t.me/lviv_lmbrg", "enabled": true}, {"id": "tg-lv1256", "name": "Так люблю той Львів", "category": "Telegram", "type": "telegram", "handle": "Lv1256", "url": "https://t.me/Lv1256", "enabled": true}, {"id": "tg-kozytskyy_maksym_official", "name": "Максим Козицький", "category": "Telegram", "type": "telegram", "handle": "kozytskyy_maksym_official", "url": "https://t.me/kozytskyy_maksym_official", "enabled": true}, {"id": "tg-people_of_action", "name": "People of Action", "category": "Telegram", "type": "telegram", "handle": "people_of_action", "url": "https://t.me/people_of_action", "enabled": true}, {"id": "tg-v_zelenskiy_official", "name": "Володимир Зеленський", "category": "Telegram", "type": "telegram", "handle": "V_Zelenskiy_official", "url": "https://t.me/V_Zelenskiy_official", "enabled": true}, {"id": "tg-oleksandrkoval_rv", "name": "Олександр Коваль", "category": "Telegram", "type": "telegram", "handle": "oleksandrkoval_rv", "url": "https://t.me/oleksandrkoval_rv", "enabled": true}, {"id": "tg-zinkevich_igor", "name": "Ігор Зінкевич", "category": "Telegram", "type": "telegram", "handle": "zinkevich_igor", "url": "https://t.me/zinkevich_igor", "enabled": true}, {"id": "tg-lviv_adm", "name": "Львівська міська рада", "category": "Telegram", "type": "telegram", "handle": "lviv_adm", "url": "https://t.me/lviv_adm", "enabled": true}, {"id": "tg-centercounteringdisinformation", "name": "Центр протидії дезінформації", "category": "Telegram", "type": "telegram", "handle": "CenterCounteringDisinformation", "url": "https://t.me/CenterCounteringDisinformation", "enabled": true}, {"id": "tg-dsns_lviv", "name": "ДСНС Львівщини", "category": "Telegram", "type": "telegram", "handle": "dsns_lviv", "url": "https://t.me/dsns_lviv", "enabled": true}, {"id": "tg-lviv_region_poluce", "name": "Поліція Львівщини", "category": "Telegram", "type": "telegram", "handle": "lviv_region_poluce", "url": "https://t.me/lviv_region_poluce", "enabled": true}, {"id": "tg-dsns_ternopil", "name": "ДСНС Тернопільщини", "category": "Telegram", "type": "telegram", "handle": "DSNS_TERNOPIL", "url": "https://t.me/DSNS_TERNOPIL", "enabled": true}, {"id": "tg-lvivpatrolpolice", "name": "Патрульна поліція Львівщини", "category": "Telegram", "type": "telegram", "handle": "lvivpatrolpolice", "url": "https://t.me/lvivpatrolpolice", "enabled": true}, {"id": "tg-pgo_gov_ua", "name": "Офіс Генерального прокурора", "category": "Telegram", "type": "telegram", "handle": "pgo_gov_ua", "url": "https://t.me/pgo_gov_ua", "enabled": true}, {"id": "tg-dsns_rivne", "name": "ДСНС Рівненщини", "category": "Telegram", "type": "telegram", "handle": "dsns_rivne", "url": "https://t.me/dsns_rivne", "enabled": true}, {"id": "tg-lvivoblprok", "name": "Львівська обласна прокуратура", "category": "Telegram", "type": "telegram", "handle": "lvivoblprok", "url": "https://t.me/lvivoblprok", "enabled": true}, {"id": "fb-dsns", "name": "ДСНС Львівщини", "category": "Facebook", "type": "link", "url": "https://www.facebook.com/LVIVDSNS", "enabled": true}, {"id": "fb-prok-lviv", "name": "Львівська обласна прокуратура", "category": "Facebook", "type": "link", "url": "https://www.facebook.com/lviv.gp.gov.ua?locale=uk_UA", "enabled": true}, {"id": "fb-police-lviv", "name": "Поліція Львівської області", "category": "Facebook", "type": "link", "url": "https://www.facebook.com/police.lviv.region?locale=uk_UA", "enabled": true}, {"id": "fb-police-zak", "name": "Поліція Закарпаття", "category": "Facebook", "type": "link", "url": "https://www.facebook.com/UA.ZakarpattyaPolice?locale=uk_UA", "enabled": true}, {"id": "fb-prok-zak", "name": "Закарпатська обласна прокуратура", "category": "Facebook", "type": "link", "url": "https://www.facebook.com/zakprokuratura?locale=uk_UA", "enabled": true}, {"id": "fb-100070918698861", "name": "Facebook · сторінка 100070918698861", "category": "Facebook", "type": "link", "url": "https://www.facebook.com/profile.php?id=100070918698861&locale=uk_UA", "enabled": true}, {"id": "fb-police-rivne", "name": "Поліція Рівненщини", "category": "Facebook", "type": "link", "url": "https://www.facebook.com/police.in.Rivne.region", "enabled": true}, {"id": "fb-police-tern", "name": "Поліція Тернопільщини", "category": "Facebook", "type": "link", "url": "https://www.facebook.com/gynp.ternopil", "enabled": true}, {"id": "fb-100064561967246", "name": "Facebook · сторінка 100064561967246", "category": "Facebook", "type": "link", "url": "https://www.facebook.com/profile.php?id=100064561967246", "enabled": true}, {"id": "fb-customs", "name": "Львівська митниця", "category": "Facebook", "type": "link", "url": "https://www.facebook.com/LVcustomsUA", "enabled": true}];
const json = (data, status=200) => new Response(JSON.stringify(data), {status, headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store"}});
const clean = s => (s||"").replace(/<script[\s\S]*?<\/script>/gi," ").replace(/<style[\s\S]*?<\/style>/gi," ").replace(/<[^>]+>/g," ").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/\s+/g," ").trim();
async function getText(url){
 const r=await fetch(url,{headers:{"user-agent":"Mozilla/5.0 (compatible; NewsDesk/2.0; public-source-monitor)","accept":"text/html,application/rss+xml,application/xml;q=0.9,*/*;q=0.8"},cf:{cacheTtl:0,cacheEverything:false}});
 if(!r.ok) throw new Error("HTTP "+r.status);
 return await r.text();
}
function parseTelegram(html, source){
 const found=[];
 const re=/<div[^>]+data-post=["']([^"']+)["'][\s\S]*?(?=<div[^>]+data-post=|$)/gi;
 let m;
 while((m=re.exec(html))!==null){
  const block=m[0], post=m[1];
  if(!post.startsWith(source.handle+"/")) continue;
  const tm=block.match(/class=["'][^"']*tgme_widget_message_text[^"']*["'][^>]*>([\s\S]*?)<\/div>/i);
  const title=clean(tm?.[1]||"");
  const dt=block.match(/<time[^>]+datetime=["']([^"']+)["']/i)?.[1]||new Date().toISOString();
  if(title) found.push({guid:post,title,url:"https://t.me/"+post,publishedAt:dt,summary:title.slice(0,350)});
  if(found.length>=8) break;
 }
 return found;
}
function parseRss(xml, source){
 const out=[];
 const blocks=[...xml.matchAll(/<(item|entry)\b[\s\S]*?<\/\1>/gi)].slice(0,15);
 for(const m of blocks){
  const b=m[0], tag=t=>{const x=b.match(new RegExp("<"+t+"(?:\\\\s[^>]*)?>([\\\\s\\\\S]*?)<\\/"+t+">","i"));return x?clean(x[1]):"";};
  const title=tag("title");let link=tag("link");
  if(!link) link=b.match(/<link[^>]+href=["']([^"']+)["']/i)?.[1]||"";
  const guid=tag("guid")||tag("id")||link||title;
  const published=tag("pubDate")||tag("published")||tag("updated")||new Date().toISOString();
  const summary=tag("description")||tag("summary")||"";
  if(title&&link)out.push({guid,title,url:new URL(link,source.url).href,publishedAt:published,summary:summary.slice(0,350)});
 }
 return out;
}
async function ensureSources(env){
 const count=await env.DB.prepare("SELECT COUNT(*) n FROM sources").first();
 if(count.n) return;
 const stmt=env.DB.prepare("INSERT OR IGNORE INTO sources(id,name,category,type,url,handle,feed_url,enabled) VALUES(?,?,?,?,?,?,?,?)");
 for(const s of DEFAULT_SOURCES) await stmt.bind(s.id,s.name,s.category,s.type,s.url,s.handle||null,s.feedUrl||null,s.enabled?1:0).run();
}
async function recordItems(env,source,items){
 const baseline=await env.DB.prepare("SELECT value FROM settings WHERE key=?").bind("baseline:"+source.id).first();
 let added=0;
 if(!baseline){
  for(const it of items) await env.DB.prepare("INSERT OR IGNORE INTO items(id,source_id,source_name,category,title,url,summary,published_at,created_at) VALUES(?,?,?,?,?,?,?,?,?)")
   .bind(source.id+":"+it.guid,source.id,source.name,source.category,it.title,it.url,it.summary,it.publishedAt,new Date().toISOString()).run();
  await env.DB.prepare("INSERT OR REPLACE INTO settings(key,value) VALUES(?,?)").bind("baseline:"+source.id,new Date().toISOString()).run();
  return 0;
 }
 for(const it of items){
  const r=await env.DB.prepare("INSERT OR IGNORE INTO items(id,source_id,source_name,category,title,url,summary,published_at,created_at) VALUES(?,?,?,?,?,?,?,?,?)")
   .bind(source.id+":"+it.guid,source.id,source.name,source.category,it.title,it.url,it.summary,it.publishedAt,new Date().toISOString()).run();
  if(r.meta.changes) added++;
 }
 return added;
}
async function checkSource(env,s){
 const now=new Date().toISOString();
 try{
  let items=[];
  if(s.type==="telegram"){
   const html=await getText("https://t.me/s/"+encodeURIComponent(s.handle));
   items=parseTelegram(html,s);
  } else if(s.type==="rss"){
   let feed=s.feed_url;
   if(!feed){
    const html=await getText(s.url);
    const m=html.match(/<link[^>]+type=["']application\/(?:rss\+xml|atom\+xml)["'][^>]+href=["']([^"']+)["']/i)||html.match(/<link[^>]+href=["']([^"']+)["'][^>]+type=["']application\/(?:rss\+xml|atom\+xml)["']/i);
    if(m?.[1]){feed=new URL(m[1],s.url).href;await env.DB.prepare("UPDATE sources SET feed_url=? WHERE id=?").bind(feed,s.id).run();}
   }
   if(!feed) throw new Error("RSS не знайдено автоматично");
   items=parseRss(await getText(feed),s);
  } else {
   await env.DB.prepare("UPDATE sources SET status='link_only',status_message='Лише швидке посилання',last_checked_at=? WHERE id=?").bind(now,s.id).run();return;
  }
  const added=await recordItems(env,s,items);
  await env.DB.prepare("UPDATE sources SET status='ok',status_message=?,last_checked_at=? WHERE id=?").bind("Нових: "+added,now,s.id).run();
 }catch(e){
  await env.DB.prepare("UPDATE sources SET status='error',status_message=?,last_checked_at=? WHERE id=?").bind(String(e.message||e).slice(0,180),now,s.id).run();
 }
}
async function poll(env){
 await ensureSources(env);
 // One scheduled invocation checks all active public Telegram and RSS sources.
 const {results}=await env.DB.prepare("SELECT * FROM sources WHERE enabled=1 AND type IN ('telegram','rss')").all();
 for(const s of results) await checkSource(env,s);
}
export default {
 async fetch(request,env,ctx){
  const url=new URL(request.url);
  if(url.pathname.startsWith("/api/")){
   await ensureSources(env);
   if(url.pathname==="/api/health")return json({ok:true,now:new Date().toISOString()});
   if(url.pathname==="/api/state"){
    const [sources,items]=await Promise.all([
     env.DB.prepare("SELECT * FROM sources ORDER BY CASE category WHEN 'Telegram' THEN 1 WHEN 'Медіа' THEN 2 ELSE 3 END,name").all(),
     env.DB.prepare("SELECT * FROM items ORDER BY created_at DESC LIMIT 500").all()
    ]);
    return json({sources:sources.results,items:items.results});
   }
   if(url.pathname==="/api/check"&&request.method==="POST"){ctx.waitUntil(poll(env));return json({ok:true,started:true},202);}
   const read=url.pathname.match(/^\/api\/items\/([^/]+)\/(read|save)$/);
   if(read&&request.method==="POST"){
    const id=decodeURIComponent(read[1]),field=read[2]==="read"?"is_read":"is_saved";
    if(read[2]==="read") await env.DB.prepare("UPDATE items SET is_read=1 WHERE id=?").bind(id).run();
    else await env.DB.prepare("UPDATE items SET is_saved=CASE WHEN is_saved=1 THEN 0 ELSE 1 END WHERE id=?").bind(id).run();
    return json({ok:true});
   }
   const edit=url.pathname.match(/^\/api\/sources\/([^/]+)$/);
   if(edit&&request.method==="PUT"){
    const b=await request.json();
    await env.DB.prepare("UPDATE sources SET name=?,url=?,feed_url=?,enabled=? WHERE id=?").bind(b.name,b.url,b.feedUrl||null,b.enabled?1:0,decodeURIComponent(edit[1])).run();
    return json({ok:true});
   }
   return json({error:"Not found"},404);
  }
  return env.ASSETS.fetch(request);
 },
 async scheduled(event,env,ctx){ctx.waitUntil(poll(env));}
};