task :default => :local

desc 'Enter development mode.'
task :local => :browse_local do
  print "Auto-regenerating enabled.\n"
  print "Development server started at http://localhost:4000/ \n"
  print "Development mode entered.\n"
  sh "bundle exec jekyll serve"
end

task :browse_local do
  `open http://localhost:4000/`
end

task :new do
  throw "No title given" unless ARGV[1]
  title = ""
  ARGV[1..ARGV.length - 1].each { |v| title += " #{v}" }
  title.strip!
  now = Time.now
  path = "source/_posts/#{now.strftime('%F')}-#{title.downcase.gsub(/[\s\.]/, '-').gsub(/[^\w\d\-]/, '')}.markdown"
  
  File.open(path, "w") do |f|
    f.puts "---"
    f.puts "layout: post"
    f.puts "title: #{title}"
    f.puts "description: "
    f.puts "keywords: "
    f.puts "date: #{now.strftime('%F %T')}"
    f.puts "tags:"
    f.puts "  - "
    f.puts "---"
    f.puts ""
    f.puts ""
  end
  
  `open -a Byword #{path}`
  exit
end

# Ping Pingomatic
desc 'Ping pingomatic'
task :pingomatic do
  begin
    require 'xmlrpc/client'
    puts '* Pinging ping-o-matic'
    XMLRPC::Client.new('rpc.pingomatic.com', '/').call('weblogUpdates.extendedPing', 'paul.elms.pro' , 'http://paul.elms.pro', 'http://feeds.feedburner.com/vyazovoi')
      rescue LoadError
    puts '! Could not ping ping-o-matic, because XMLRPC::Client could not be found.'
  end
end # task :pingomatic

# Ping Yandex
desc 'Ping yandex'
task :yandex do
  begin
    require 'xmlrpc/client'
    puts '* Pinging yandex'
    XMLRPC::Client.new('ping.blogs.yandex.ru', '/RPC2').call('weblogUpdates.extendedPing', 'paul.elms.pro' , 'http://paul.elms.pro', 'http://feeds.feedburner.com/vyazovoi')
  rescue LoadError
    puts '! Could not ping yandex, because XMLRPC::Client could not be found.'
  end
end # task :yandex

# Ping Google
desc 'Notify Google of the new sitemap'
task :sitemapgoogle do
  begin
    require 'net/http'
    require 'uri'
    puts '* Pinging Google about our sitemap'
    Net::HTTP.get('www.google.com', '/webmasters/tools/ping?sitemap=' + URI.escape('http://paul.elms.pro/sitemap.xml'))
      rescue LoadError
    puts '! Could not ping Google about our sitemap, because Net::HTTP or URI could not be found.'
  end
end # task :sitemapgoogle

# Ping Bing
desc 'Notify Bing of the new sitemap'
task :sitemapbing do
  begin
    require 'net/http'
    require 'uri'
    puts '* Pinging Bing about our sitemap'
    Net::HTTP.get('www.bing.com', '/webmaster/ping.aspx?siteMap=' + URI.escape('http://paul.elms.pro/sitemap.xml'))
      rescue LoadError
    puts '! Could not ping Bing about our sitemap, because Net::HTTP or URI could not be found.'
  end
end # task :sitemapbing

# Ping pubsubhubbub
desc 'Notify pubsubhubbub server.'
task :ping do
  begin
    require 'cgi'
    require 'net/http'
    puts '* Pinging pubsubhubbub server'
    data = 'hub.mode=publish&hub.url=' + CGI::escape("http://feeds.feedburner.com/vyazovoi")
    http = Net::HTTP.new('pubsubhubbub.appspot.com', 80)
    resp, data = http.post('http://pubsubhubbub.appspot.com/publish',
            data,
            {'Content-Type' => 'application/x-www-form-urlencoded'})
    puts "Ping error: #{resp}, #{data}" unless resp.code == "204"
  end
end # task: pubsubhubbub

#Usage: rake ping
desc 'Notify various services about new content'
task :pingall => [:pingomatic, :sitemapgoogle, :sitemapbing, :ping, :yandex] do
end # task :ping