const DEFAULT_SOURCES = [{"id":"zaxid","name":"ZAXID.NET","category":"Медіа","type":"rss","url":"https://zaxid.net/","feedUrl":"","enabled":true},{"id":"nta","name":"NTA","category":"Медіа","type":"rss","url":"https://nta.ua/","feedUrl":"","enabled":true},{"id":"city","name":"Львівська міська рада","category":"Львівщина","type":"rss","url":"https://city-adm.lviv.ua/news/","feedUrl":"","enabled":true},{"id":"lvivmedia","name":"Львів Медіа","category":"Медіа","type":"rss","url":"https://lviv.media/","feedUrl":"","enabled":true},{"id":"suspilne","name":"Суспільне","category":"Медіа","type":"rss","url":"https://suspilne.media/","feedUrl":"","enabled":true},{"id":"tg-lvivych_news","name":"Львівич","category":"Telegram","type":"telegram","handle":"lvivych_news","url":"https://t.me/lvivych_news","enabled":true},{"id":"tg-lviv_lmbrg","name":"LEMBERG","category":"Telegram","type":"telegram","handle":"lviv_lmbrg","url":"https://t.me/lviv_lmbrg","enabled":true},{"id":"tg-lv1256","name":"Так люблю той Львів","category":"Telegram","type":"telegram","handle":"Lv1256","url":"https://t.me/Lv1256","enabled":true},{"id":"tg-kozytskyy_maksym_official","name":"Максим Козицький","category":"Telegram","type":"telegram","handle":"kozytskyy_maksym_official","url":"https://t.me/kozytskyy_maksym_official","enabled":true},{"id":"tg-people_of_action","name":"People of Action","category":"Telegram","type":"telegram","handle":"people_of_action","url":"https://t.me/people_of_action","enabled":true},{"id":"tg-v_zelenskiy_official","name":"Володимир Зеленський","category":"Telegram","type":"telegram","handle":"V_Zelenskiy_official","url":"https://t.me/V_Zelenskiy_official","enabled":true},{"id":"tg-oleksandrkoval_rv","name":"Олександр Коваль","category":"Telegram","type":"telegram","handle":"oleksandrkoval_rv","url":"https://t.me/oleksandrkoval_rv","enabled":true},{"id":"tg-zinkevich_igor","name":"Ігор Зінкевич","category":"Telegram","type":"telegram","handle":"zinkevich_igor","url":"https://t.me/zinkevich_igor","enabled":true},{"id":"tg-lviv_adm","name":"Львівська міська рада","category":"Telegram","type":"telegram","handle":"lviv_adm","url":"https://t.me/lviv_adm","enabled":true},{"id":"tg-centercounteringdisinformation","name":"Центр протидії дезінформації","category":"Telegram","type":"telegram","handle":"CenterCounteringDisinformation","url":"https://t.me/CenterCounteringDisinformation","enabled":true},{"id":"tg-dsns_lviv","name":"ДСНС Львівщини","category":"Telegram","type":"telegram","handle":"dsns_lviv","url":"https://t.me/dsns_lviv","enabled":true},{"id":"tg-lviv_region_poluce","name":"Поліція Львівщини","category":"Telegram","type":"telegram","handle":"lviv_region_poluce","url":"https://t.me/lviv_region_poluce","enabled":true},{"id":"tg-dsns_ternopil","name":"ДСНС Тернопільщини","category":"Telegram","type":"telegram","handle":"DSNS_TERNOPIL","url":"https://t.me/DSNS_TERNOPIL","enabled":true},{"id":"tg-lvivpatrolpolice","name":"Патрульна поліція Львівщини","category":"Telegram","type":"telegram","handle":"lvivpatrolpolice","url":"https://t.me/lvivpatrolpolice","enabled":true},{"id":"tg-pgo_gov_ua","name":"Офіс Генерального прокурора","category":"Telegram","type":"telegram","handle":"pgo_gov_ua","url":"https://t.me/pgo_gov_ua","enabled":true},{"id":"tg-dsns_rivne","name":"ДСНС Рівненщини","category":"Telegram","type":"telegram","handle":"dsns_rivne","url":"https://t.me/dsns_rivne","enabled":true},{"id":"tg-lvivoblprok","name":"Львівська обласна прокуратура","category":"Telegram","type":"telegram","handle":"lvivoblprok","url":"https://t.me/lvivoblprok","enabled":true},{"id":"fb-dsns","name":"ДСНС Львівщини","category":"Facebook","type":"link","url":"https://www.facebook.com/LVIVDSNS","enabled":true},{"id":"fb-prok-lviv","name":"Львівська обласна прокуратура","category":"Facebook","type":"link","url":"https://www.facebook.com/lviv.gp.gov.ua?locale=uk_UA","enabled":true},{"id":"fb-police-lviv","name":"Поліція Львівської області","category":"Facebook","type":"link","url":"https://www.facebook.com/police.lviv.region?locale=uk_UA","enabled":true},{"id":"fb-police-zak","name":"Поліція Закарпаття","category":"Facebook","type":"link","url":"https://www.facebook.com/UA.ZakarpattyaPolice?locale=uk_UA","enabled":true},{"id":"fb-prok-zak","name":"Закарпатська обласна прокуратура","category":"Facebook","type":"link","url":"https://www.facebook.com/zakprokuratura?locale=uk_UA","enabled":true},{"id":"fb-100070918698861","name":"Facebook · сторінка 100070918698861","category":"Facebook","type":"link","url":"https://www.facebook.com/profile.php?id=100070918698861&locale=uk_UA","enabled":true},{"id":"fb-police-rivne","name":"Поліція Рівненщини","category":"Facebook","type":"link","url":"https://www.facebook.com/police.in.Rivne.region","enabled":true},{"id":"fb-police-tern","name":"Поліція Тернопільщини","category":"Facebook","type":"link","url":"https://www.facebook.com/gynp.ternopil","enabled":true},{"id":"fb-100064561967246","name":"Facebook · сторінка 100064561967246","category":"Facebook","type":"link","url":"https://www.facebook.com/profile.php?id=100064561967246","enabled":true},{"id":"fb-customs","name":"Львівська митниця","category":"Facebook","type":"link","url":"https://www.facebook.com/LVcustomsUA","enabled":true}];

const json = (data, status=200) => new Response(JSON.stringify(data), {status,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store"}});
const nowISO = () => new Date().toISOString();
const textOnly = s => decodeEntities(String(s||"").replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,"$1").replace(/<script[\s\S]*?<\/script>/gi," ").replace(/<style[\s\S]*?<\/style>/gi," ").replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim());
function decodeEntities(s){return String(s||"").replace(/&(#x[0-9a-f]+|#\d+|amp|lt|gt|quot|apos|nbsp);/gi,(m,x)=>{const k=x.toLowerCase();if(k==="amp")return "&";if(k==="lt")return "<";if(k==="gt")return ">";if(k==="quot")return '"';if(k==="apos"||k==="#39")return "'";if(k==="nbsp")return " ";try{return k.startsWith("#x")?String.fromCodePoint(parseInt(k.slice(2),16)):String.fromCodePoint(parseInt(k.slice(1),10))}catch{return m}})}
async function getText(url){
 const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),12000);
 try{const r=await fetch(url,{headers:{"user-agent":"Mozilla/5.0 (compatible; NewsDesk/3.0; public-source-monitor)",accept:"text/html,application/rss+xml,application/atom+xml,application/xml;q=0.9,*/*;q=0.8"},signal:controller.signal,cf:{cacheTtl:0,cacheEverything:false}});if(!r.ok)throw new Error("HTTP "+r.status);return await r.text()}finally{clearTimeout(timer)}
}
function tagValue(block,name){const safe=name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");const re=new RegExp("<(?:[\\w.-]+:)?"+safe+"(?:\\s[^>]*)?>([\\s\\S]*?)<\\/(?:[\\w.-]+:)?"+safe+"\\s*>","i");return re.exec(block)?.[1]||""}
function parseTelegram(html,source){
 const found=[],re=/<div[^>]+data-post=["']([^"']+)["'][\s\S]*?(?=<div[^>]+data-post=|$)/gi;let m;
 while((m=re.exec(html))!==null){const post=m[1],block=m[0];if(!post.startsWith(source.handle+"/"))continue;const tm=block.match(/class=["'][^"']*tgme_widget_message_text[^"']*["'][^>]*>([\s\S]*?)<\/div>/i);const title=textOnly(tm?.[1]||"");if(!title)continue;const publishedAt=block.match(/<time[^>]+datetime=["']([^"']+)["']/i)?.[1]||null;found.push({guid:post,title,url:"https://t.me/"+post,publishedAt,summary:title.slice(0,700),messageId:Number(post.split("/").pop())||0})}
 return found;
}
async function fetchTelegram(source){
 let before=null,all=[],seen=new Set();
 // Public Telegram previews expose a finite window; paginate older posts when Telegram provides them.
 for(let page=0;page<5;page++){
  const url="https://t.me/s/"+encodeURIComponent(source.handle)+(before?"?before="+before:"");
  const batch=parseTelegram(await getText(url),source);if(!batch.length)break;
  for(const it of batch)if(!seen.has(it.guid)){seen.add(it.guid);all.push(it)}
  const ids=batch.map(x=>x.messageId).filter(Boolean);if(!ids.length)break;const oldest=Math.min(...ids);if(!oldest||oldest===before||batch.length<2)break;before=oldest;
 }
 return all;
}
function parseRss(xml,source){
 const out=[],blocks=[...xml.matchAll(/<(?:[\w.-]+:)?(item|entry)\b[^>]*>[\s\S]*?<\/(?:[\w.-]+:)?\1\s*>/gi)];
 for(const m of blocks){const b=m[0],title=textOnly(tagValue(b,"title"));let linkRaw=tagValue(b,"link");let link=textOnly(linkRaw);if(!link){link=b.match(/<(?:[\w.-]+:)?link\b[^>]*(?:href|url)=["']([^"']+)["'][^>]*\/?\s*>/i)?.[1]||""}else if(/^\s*<link\b/i.test(linkRaw)){link=linkRaw.match(/href=["']([^"']+)["']/i)?.[1]||link}
  link=decodeEntities(link.trim());const guid=textOnly(tagValue(b,"guid")||tagValue(b,"id"))||link||title;
  const rawDate=textOnly(tagValue(b,"pubDate")||tagValue(b,"published")||tagValue(b,"updated")||tagValue(b,"date"));const parsed=rawDate?new Date(rawDate):null;const publishedAt=parsed&&!Number.isNaN(parsed.getTime())?parsed.toISOString():null;
  const summary=textOnly(tagValue(b,"encoded")||tagValue(b,"description")||tagValue(b,"summary")||tagValue(b,"content"));
  if(title&&link&&guid){try{out.push({guid,title,url:new URL(link,source.url).href,publishedAt,summary:summary.slice(0,700)})}catch{}}
 }
 return out;
}
async function discoverFeed(source){
 const html=await getText(source.url);const matches=[...html.matchAll(/<link\b([^>]+)>/gi)];
 for(const m of matches){const attrs=m[1],type=attrs.match(/type=["']([^"']+)["']/i)?.[1]||"";if(!/rss|atom|xml/i.test(type))continue;const href=attrs.match(/href=["']([^"']+)["']/i)?.[1];if(href)return new URL(decodeEntities(href),source.url).href}
 const candidates=["/feed/","/feed","/rss","/rss.xml","/feed.xml","/atom.xml"].map(p=>new URL(p,source.url).href);
 for(const candidate of candidates){try{const body=await getText(candidate);if(/<(rss|feed|rdf:RDF)\b/i.test(body))return candidate}catch{}}
 throw new Error("Не вдалося знайти RSS. Вкажи точний RSS URL у налаштуваннях джерела.");
}
async function ensureSources(env){const count=await env.DB.prepare("SELECT COUNT(*) n FROM sources").first();if(count?.n)return;const stmt=env.DB.prepare("INSERT OR IGNORE INTO sources(id,name,category,type,url,handle,feed_url,enabled) VALUES(?,?,?,?,?,?,?,?)");for(const s of DEFAULT_SOURCES)await stmt.bind(s.id,s.name,s.category,s.type,s.url,s.handle||null,s.feedUrl||null,s.enabled?1:0).run()}
async function setting(env,key,value){await env.DB.prepare("INSERT OR REPLACE INTO settings(key,value) VALUES(?,?)").bind(key,String(value)).run()}
function itemId(source,it){return source.id+":"+it.guid}
async function recordItems(env,source,items){
 const baseline=await env.DB.prepare("SELECT value FROM settings WHERE key=?").bind("baseline:"+source.id).first();
 const snapshot=await env.DB.prepare("SELECT value FROM settings WHERE key=?").bind("snapshot-v3:"+source.id).first();
 // On upgrade, remember the currently visible window so old/deleted posts do not flood back in.
 // Existing rows remain untouched; only missing legacy items are suppressed.
 if(!baseline||!snapshot){
  await markDeleted(env,items.map(it=>itemId(source,it)));
  if(!baseline)await setting(env,"baseline:"+source.id,nowISO());
  if(!snapshot)await setting(env,"snapshot-v3:"+source.id,nowISO());
  return 0;
 }
 let added=0;
 for(const it of items){
  const id=itemId(source,it),deletedKey="deleted:"+id;
  const r=await env.DB.prepare(`INSERT INTO items(id,source_id,source_name,category,title,url,summary,published_at,created_at)
   SELECT ?,?,?,?,?,?,?,?,? WHERE NOT EXISTS(SELECT 1 FROM settings WHERE key=?)
   ON CONFLICT(id) DO NOTHING`).bind(id,source.id,source.name,source.category,it.title,it.url,it.summary,it.publishedAt||null,nowISO(),deletedKey).run();
  if(r.meta.changes)added++;
 }
 return added;
}
async function checkSource(env,s){const checkedAt=nowISO();try{
 let items=[];
 if(s.type==="telegram"){if(!s.handle)throw new Error("Не вказано Telegram username");items=await fetchTelegram(s)}
 else if(s.type==="rss"){let feed=s.feed_url;if(!feed){feed=await discoverFeed(s);await env.DB.prepare("UPDATE sources SET feed_url=? WHERE id=?").bind(feed,s.id).run()}items=parseRss(await getText(feed),s);if(!items.length)throw new Error("RSS доступний, але публікацій не знайдено або формат не розпізнано")}
 else{await env.DB.prepare("UPDATE sources SET status='link_only',status_message='Лише швидке посилання',last_checked_at=? WHERE id=?").bind(checkedAt,s.id).run();return{checked:false,ok:true}}
 const added=await recordItems(env,s,items);await env.DB.prepare("UPDATE sources SET status='ok',status_message=?,last_checked_at=? WHERE id=?").bind(`Отримано: ${items.length} · нових: ${added}`,checkedAt,s.id).run();return{checked:true,ok:true,received:items.length,added};
 }catch(e){const message=e?.name==="AbortError"?"Тайм-аут запиту (12 с)":String(e?.message||e);await env.DB.prepare("UPDATE sources SET status='error',status_message=?,last_checked_at=? WHERE id=?").bind(message.slice(0,180),checkedAt,s.id).run();return{checked:true,ok:false,error:message}}
}
async function acquirePollLock(env){const token=nowISO()+":"+crypto.randomUUID();const r=await env.DB.prepare(`INSERT INTO settings(key,value) VALUES('poll_lock',?) ON CONFLICT(key) DO UPDATE SET value=excluded.value WHERE datetime(settings.value)<datetime('now','-90 seconds') RETURNING value`).bind(token).first();return r?.value===token?token:null}
async function poll(env){
 await ensureSources(env);const token=await acquirePollLock(env);if(!token)return;
 const started=nowISO();await setting(env,"last_check_started_at",started);
 try{const {results=[]}=await env.DB.prepare("SELECT * FROM sources WHERE enabled=1 AND type IN ('telegram','rss') ORDER BY id").all();let checked=0,failed=0,received=0,added=0;
  // Bounded parallelism keeps a full 30+ source pass within Worker execution limits.
  for(let i=0;i<results.length;i+=8){const batch=results.slice(i,i+8);const outcomes=await Promise.all(batch.map(s=>checkSource(env,s)));for(const x of outcomes){if(x.checked)checked++;if(!x.ok)failed++;received+=x.received||0;added+=x.added||0}}
  await setting(env,"last_check_at",nowISO());await setting(env,"last_check_count",checked);await setting(env,"last_check_failed",failed);await setting(env,"last_check_received",received);await setting(env,"last_check_added",added);
 }finally{await env.DB.prepare("DELETE FROM settings WHERE key='poll_lock' AND value=?").bind(token).run()}
}
async function readSettings(env){const {results}=await env.DB.prepare("SELECT key,value FROM settings WHERE key IN ('last_check_started_at','last_check_at','last_check_count','last_check_failed','last_check_received','last_check_added')").all();return Object.fromEntries(results.map(x=>[x.key,x.value]))}
async function parseBody(request){try{return await request.json()}catch{return null}}
function validSource(b){return b&&typeof b.name==="string"&&b.name.trim()&&typeof b.url==="string"&&/^https?:\/\//i.test(b.url)&&typeof b.category==="string"&&b.category.trim()&&["rss","telegram","link"].includes(b.type)&& (b.type!=="telegram"||typeof b.handle==="string"&&b.handle.trim())}
async function markDeleted(env,ids){if(!ids.length)return;const stamp=nowISO();for(let i=0;i<ids.length;i+=80){const chunk=ids.slice(i,i+80);const stmts=chunk.map(id=>env.DB.prepare("INSERT OR REPLACE INTO settings(key,value) VALUES(?,?)").bind("deleted:"+id,stamp));await env.DB.batch(stmts)}}
export default{
 async fetch(request,env,ctx){const url=new URL(request.url);if(url.pathname.startsWith("/api/")){await ensureSources(env);
  if(url.pathname==="/api/health")return json({ok:true,now:nowISO()});
  if(url.pathname==="/api/state"){const [sources,items,monitor]=await Promise.all([env.DB.prepare("SELECT * FROM sources ORDER BY CASE category WHEN 'Telegram' THEN 1 WHEN 'Медіа' THEN 2 ELSE 3 END,name").all(),env.DB.prepare("SELECT * FROM items ORDER BY COALESCE(julianday(published_at),julianday(created_at)) DESC,created_at DESC LIMIT 5000").all(),readSettings(env)]);return json({sources:sources.results,items:items.results,monitor,intervalSeconds:60})}
  if(url.pathname==="/api/check"&&request.method==="POST"){ctx.waitUntil(poll(env));return json({ok:true,started:true},202)}
  if(url.pathname==="/api/items/mark-all-read"&&request.method==="POST"){const r=await env.DB.prepare("UPDATE items SET is_read=1 WHERE is_read=0").run();return json({ok:true,changed:r.meta.changes||0})}
  if(url.pathname==="/api/items/delete-read"&&request.method==="DELETE"){const rows=await env.DB.prepare("SELECT id FROM items WHERE is_read=1 AND is_saved=0").all();const ids=(rows.results||[]).map(x=>x.id);await markDeleted(env,ids);const r=await env.DB.prepare("DELETE FROM items WHERE is_read=1 AND is_saved=0").run();return json({ok:true,deleted:r.meta.changes||0})}
  const item=url.pathname.match(/^\/api\/items\/([^/]+)(?:\/(read|save))?$/);if(item){const id=decodeURIComponent(item[1]);if(request.method==="DELETE"&&!item[2]){await markDeleted(env,[id]);await env.DB.prepare("DELETE FROM items WHERE id=?").bind(id).run();return json({ok:true})}if(request.method==="POST"&&item[2]){if(item[2]==="read")await env.DB.prepare("UPDATE items SET is_read=1 WHERE id=?").bind(id).run();else await env.DB.prepare("UPDATE items SET is_saved=CASE WHEN is_saved=1 THEN 0 ELSE 1 END WHERE id=?").bind(id).run();return json({ok:true})}}
  const source=url.pathname.match(/^\/api\/sources\/([^/]+)$/);if(source){const id=decodeURIComponent(source[1]);if(request.method==="DELETE"){await env.DB.prepare("DELETE FROM sources WHERE id=?").bind(id).run();return json({ok:true})}if(request.method==="PUT"||request.method==="POST"){const b=await parseBody(request);if(!validSource(b))return json({error:"Перевір назву, URL, категорію, тип та Telegram username"},400);const handle=(b.handle||"").trim().replace(/^@/,"")||null,feed=(b.feedUrl||"").trim()||null;await env.DB.prepare("UPDATE sources SET name=?,category=?,type=?,url=?,handle=?,feed_url=?,enabled=?,status='pending',status_message='Очікує перевірки' WHERE id=?").bind(b.name.trim(),b.category.trim(),b.type,b.url.trim(),handle,feed,b.enabled===false?0:1,id).run();return json({ok:true})}}
  if(url.pathname==="/api/sources"&&request.method==="POST"){const b=await parseBody(request);if(!validSource(b))return json({error:"Перевір назву, URL, категорію, тип та Telegram username"},400);const id="custom-"+crypto.randomUUID(),handle=(b.handle||"").trim().replace(/^@/,"")||null;await env.DB.prepare("INSERT INTO sources(id,name,category,type,url,handle,feed_url,enabled,status,status_message) VALUES(?,?,?,?,?,?,?,?,?,?)").bind(id,b.name.trim(),b.category.trim(),b.type,b.url.trim(),handle,(b.feedUrl||"").trim()||null,b.enabled===false?0:1,"pending","Очікує перевірки").run();return json({ok:true,id},201)}
  return json({error:"Not found"},404)}return env.ASSETS.fetch(request)},
 async scheduled(event,env,ctx){ctx.waitUntil(poll(env))}
};
