from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
import sqlite3
import traceback


class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        con = sqlite3.connect("data.db")
        cur = con.cursor()
        try:
            # /api/MapTiles/{{z}}/{{y}}/{{x}}.png
            split = self.path.split("/")
            z = int(split[3])
            y = int(split[4])
            x = int(split[5].split(".")[0])
            rowid = cur.execute(
                "SELECT rowid FROM MapTiles WHERE X = ? AND Y = ? AND Z = ?", (x, y, z)
            ).fetchone()
            if rowid == None:
                self.send_response(404)
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
            else:
                with con.blobopen("MapTiles", "ImageData", rowid[0]) as tile:
                    self.send_response(200)
                    self.send_header("Content-Length", str(len(tile)))
                    self.send_header("Access-Control-Allow-Origin", "*")
                    self.end_headers()
                    self.copyfile(tile, self.wfile)
        except:
            traceback.print_exc()
            self.send_response(404)
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
        finally:
            cur.close()
            con.close()


httpd = ThreadingHTTPServer(("127.0.0.1", 5000), Handler)
httpd.serve_forever()
