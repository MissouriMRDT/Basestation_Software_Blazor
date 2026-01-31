from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
import os
import json


class Handler(SimpleHTTPRequestHandler):
    def send_head(self):
        path = self.translate_path(self.path)
        f = None
        ctype = self.guess_type(path)
        try:
            f = open(path, "rb")
        except OSError:
            self.send_error(404, "File not found")
            return None
        try:
            fs = os.fstat(f.fileno())

            self.send_response(200)
            self.send_header("Content-type", ctype)
            self.send_header("Content-Length", str(fs[6]))
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            return f
        except:
            f.close()
            raise

    def do_GET(self):
        if self.path == "/api/detection_list":
            self.send_response(200)
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(json.dumps(os.listdir("api/detections")).encode("ascii"))
            return
        if self.path.endswith(".png") or self.path.endswith(".jpg"):
            f = self.send_head()
            if f:
                try:
                    self.copyfile(f, self.wfile)
                finally:
                    f.close()


httpd = ThreadingHTTPServer(("127.0.0.1", 3284), Handler)
httpd.serve_forever()
