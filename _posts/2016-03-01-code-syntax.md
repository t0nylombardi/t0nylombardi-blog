---
title: Code Syntax
---
To insert highlight code inside of a post, it's enough to use some specific tags, has directly described into the [Jekyll documentation](http://jekyllrb.com/docs/templates/#code-snippet-highlighting). In this way the code will be included into a ``.highlight`` CSS class and will be highlight according to the [syntax.scss](https://github.com/mojombo/tpw/blob/master/css/syntax.css) file. This is the standard style adopted by **Github** to highlight the code.

```ruby
module Tracker
  class Rack
    def initialize(app)
      @app = app
    end

    def call(env)
      @req = ::Rack::Request.new(env)
      if @req.path_info =~ /tracker.gif/
        result = Services::Params.decode(@req.query_string)
        location = Services::Locations.lookup(@req.ip)
        params = {
          ip_address:     location["ipAddress"],
          campaign:       result[:campaign],
          banner_size:    result[:banner_size],
          station:        result[:station],
          city:           location["cityName"],
          state:          location["regionName"],
          user_agent:     @req.user_agent,
          referral:       @req.referer
        }

        if TmpgImpression.create!(params)
          [
            200, { 'Content-Type' => 'image/gif' },
            [File.read(File.join(File.dirname(__FILE__), 'tracker.gif'))]
          ]
        else
          Rails.logger.warn "\n\n Failed to create record on:#{Date.today}"
        end
      else
        @app.call(env)
      end
    end

    def split_params(str)
      str = Base64.urlsafe_decode64(str)
      arry  = str.split(/&/)
      hash = {}
      arry.each do |a|
        hash[a.scan(/^\w*/).join('').to_sym] = a.gsub(/^(\w*=)/,'')
      end
      hash
    end

  end
end
```
